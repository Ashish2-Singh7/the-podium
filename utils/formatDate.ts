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
