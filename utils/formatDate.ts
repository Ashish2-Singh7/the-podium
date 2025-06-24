import markdownit from 'markdown-it';



const md = markdownit();
function stripHtmlTags(html: string): string {
  // Client-side: Use DOMParser for more robust HTML parsing
  if (typeof window !== 'undefined' && window.DOMParser) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  } else {
    // Server-side (or environments without DOMParser): Use regex as a fallback.
    // This is less robust but usually sufficient for simple HTML generated from markdown.
    return html.replace(/<[^>]*>/g, '');
  }
}

export function formatMonthYear(dateString) {
  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long'
  }).format(date);
  return formattedDate;
}


export function calculateReadingTime(content: string, wordsPerMinute: number = 200): string {
  if (!content || typeof content !== 'string' || content.trim() === '') {
    return "0 min read";
  }

  const strippedContent = content.replace(/<[^>]*>/g, '').replace(/&[a-z0-9#]+;/gi, '');

  const words = strippedContent.trim().split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;

  if (wordCount === 0) {
    return "0 min read";
  }
  const minutes = Math.ceil(wordCount / wordsPerMinute);

  if (minutes === 0) {
    return "Less than a min read";
  } else if (minutes === 1) {
    return "1 min read";
  } else {
    return `${minutes} min read`;
  }
}

export const getExcerpt = (markdownContent: string, maxLength: number = 100): string => {
  if (!markdownContent) return '';

  // 1. Convert Markdown to HTML
  const htmlContent = md.render(markdownContent);

  // 2. Strip HTML tags from the HTML content to get plain text
  // This uses a DOMParser if available (client-side) or a regex fallback.
  const plainTextContent = stripHtmlTags(htmlContent);

  // 3. Truncate the plain text
  if (plainTextContent.length <= maxLength) {
    return plainTextContent;
  }
  // Find the last space before maxLength to avoid cutting words in half
  return plainTextContent.substring(0, plainTextContent.lastIndexOf(' ', maxLength)) + '...';
};