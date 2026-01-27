import { PlaywrightCrawler, Dataset } from "crawlee";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const OUTPUT_DIR = join(import.meta.dirname, "..", "source-docs");

// All Dokploy API reference pages to scrape
const API_PAGES = [
  "https://docs.dokploy.com/docs/api",
  "https://docs.dokploy.com/docs/api/reference-admin",
  "https://docs.dokploy.com/docs/api/reference-ai",
  "https://docs.dokploy.com/docs/api/reference-application",
  "https://docs.dokploy.com/docs/api/reference-backup",
  "https://docs.dokploy.com/docs/api/reference-bitbucket",
  "https://docs.dokploy.com/docs/api/reference-certificates",
  "https://docs.dokploy.com/docs/api/reference-cluster",
  "https://docs.dokploy.com/docs/api/reference-compose",
  "https://docs.dokploy.com/docs/api/reference-deployment",
  "https://docs.dokploy.com/docs/api/reference-destination",
  "https://docs.dokploy.com/docs/api/reference-docker",
  "https://docs.dokploy.com/docs/api/reference-domain",
  "https://docs.dokploy.com/docs/api/reference-environment",
  "https://docs.dokploy.com/docs/api/reference-gitea",
  "https://docs.dokploy.com/docs/api/reference-github",
  "https://docs.dokploy.com/docs/api/reference-gitlab",
  "https://docs.dokploy.com/docs/api/reference-gitProvider",
  "https://docs.dokploy.com/docs/api/reference-mariadb",
  "https://docs.dokploy.com/docs/api/reference-mongo",
  "https://docs.dokploy.com/docs/api/reference-mounts",
  "https://docs.dokploy.com/docs/api/reference-mysql",
  "https://docs.dokploy.com/docs/api/reference-notification",
  "https://docs.dokploy.com/docs/api/reference-organization",
  "https://docs.dokploy.com/docs/api/reference-port",
  "https://docs.dokploy.com/docs/api/reference-postgres",
  "https://docs.dokploy.com/docs/api/reference-previewDeployment",
  "https://docs.dokploy.com/docs/api/reference-project",
  "https://docs.dokploy.com/docs/api/reference-redirects",
  "https://docs.dokploy.com/docs/api/reference-redis",
  "https://docs.dokploy.com/docs/api/reference-registry",
  "https://docs.dokploy.com/docs/api/reference-rollback",
  "https://docs.dokploy.com/docs/api/reference-schedule",
  "https://docs.dokploy.com/docs/api/reference-security",
  "https://docs.dokploy.com/docs/api/reference-server",
  "https://docs.dokploy.com/docs/api/reference-settings",
  "https://docs.dokploy.com/docs/api/reference-sshKey",
  "https://docs.dokploy.com/docs/api/reference-stripe",
  "https://docs.dokploy.com/docs/api/reference-swarm",
  "https://docs.dokploy.com/docs/api/reference-user",
  "https://docs.dokploy.com/docs/api/reference-volumeBackups",
];

// Ensure output directory exists
mkdirSync(OUTPUT_DIR, { recursive: true });

const crawler = new PlaywrightCrawler({
  maxRequestsPerCrawl: 50,
  requestHandlerTimeoutSecs: 60,

  async requestHandler({ request, page, log }) {
    const url = request.loadedUrl || request.url;
    log.info(`Scraping: ${url}`);

    // Wait for main content to load
    await page.waitForSelector("main", { timeout: 10000 }).catch(() => {});

    // Extract the filename from URL
    const urlPath = new URL(url).pathname;
    const filename = urlPath.split("/").pop() || "index";
    const safeFilename = filename.replace(/[^a-zA-Z0-9-]/g, "-") + ".md";

    // Extract page title
    const title = await page.title();

    // Extract main content and convert to markdown-like text
    const content = await page.evaluate(() => {
      const main = document.querySelector("main") || document.body;

      // Helper to convert element to markdown
      function toMarkdown(element: Element, depth = 0): string {
        let result = "";

        for (const node of element.childNodes) {
          if (node.nodeType === Node.TEXT_NODE) {
            result += node.textContent;
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as Element;
            const tag = el.tagName.toLowerCase();

            switch (tag) {
              case "h1":
                result += `\n# ${el.textContent?.trim()}\n\n`;
                break;
              case "h2":
                result += `\n## ${el.textContent?.trim()}\n\n`;
                break;
              case "h3":
                result += `\n### ${el.textContent?.trim()}\n\n`;
                break;
              case "h4":
                result += `\n#### ${el.textContent?.trim()}\n\n`;
                break;
              case "h5":
                result += `\n##### ${el.textContent?.trim()}\n\n`;
                break;
              case "h6":
                result += `\n###### ${el.textContent?.trim()}\n\n`;
                break;
              case "p":
                result += `${el.textContent?.trim()}\n\n`;
                break;
              case "pre":
              case "code":
                if (tag === "pre" || el.parentElement?.tagName !== "PRE") {
                  const lang =
                    el.className.match(/language-(\w+)/)?.[1] || "";
                  result += `\n\`\`\`${lang}\n${el.textContent?.trim()}\n\`\`\`\n\n`;
                } else {
                  result += `\`${el.textContent}\``;
                }
                break;
              case "ul":
                result += "\n";
                for (const li of el.querySelectorAll(":scope > li")) {
                  result += `- ${li.textContent?.trim()}\n`;
                }
                result += "\n";
                break;
              case "ol":
                result += "\n";
                let i = 1;
                for (const li of el.querySelectorAll(":scope > li")) {
                  result += `${i}. ${li.textContent?.trim()}\n`;
                  i++;
                }
                result += "\n";
                break;
              case "table":
                const rows = el.querySelectorAll("tr");
                for (let i = 0; i < rows.length; i++) {
                  const cells = rows[i].querySelectorAll("th, td");
                  const rowContent = Array.from(cells)
                    .map((c) => c.textContent?.trim() || "")
                    .join(" | ");
                  result += `| ${rowContent} |\n`;
                  if (i === 0) {
                    result +=
                      "|" + Array(cells.length).fill(" --- ").join("|") + "|\n";
                  }
                }
                result += "\n";
                break;
              case "a":
                const href = el.getAttribute("href");
                result += `[${el.textContent}](${href})`;
                break;
              case "strong":
              case "b":
                result += `**${el.textContent}**`;
                break;
              case "em":
              case "i":
                result += `*${el.textContent}*`;
                break;
              case "br":
                result += "\n";
                break;
              case "hr":
                result += "\n---\n\n";
                break;
              case "div":
              case "section":
              case "article":
              case "span":
                result += toMarkdown(el, depth);
                break;
              case "script":
              case "style":
              case "nav":
              case "footer":
              case "aside":
                // Skip these elements
                break;
              default:
                result += toMarkdown(el, depth);
            }
          }
        }

        return result;
      }

      return toMarkdown(main);
    });

    // Clean up the content
    const cleanContent = content
      .replace(/\n{3,}/g, "\n\n") // Remove excessive newlines
      .replace(/^\s+/gm, "") // Remove leading whitespace
      .trim();

    // Create markdown file
    const markdown = `# ${title}\n\nSource: ${url}\n\n---\n\n${cleanContent}`;

    // Save to file
    const filepath = join(OUTPUT_DIR, safeFilename);
    writeFileSync(filepath, markdown, "utf-8");
    log.info(`Saved: ${safeFilename}`);

    // Also save to dataset for reference
    await Dataset.pushData({
      url,
      title,
      filename: safeFilename,
      contentLength: cleanContent.length,
    });
  },

  failedRequestHandler({ request, log }) {
    log.error(`Failed to scrape: ${request.url}`);
  },
});

console.log(`Starting scrape of ${API_PAGES.length} Dokploy API pages...`);
console.log(`Output directory: ${OUTPUT_DIR}`);

await crawler.run(API_PAGES);

console.log("\nScraping complete! Check the source-docs directory.");
