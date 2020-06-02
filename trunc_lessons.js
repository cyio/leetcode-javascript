// chapters 嵌套章节结构
// 需要截取最多 4 节
function truncLessons(chapters) {
  let max = 4;
  let count = 0;
  const result = [];
  for (let i = 0; i < chapters.length; i += 1) {
    const chapter = chapters[i];
    const { length } = chapter.lessons;
    if (length >= max) {
      const lessons = chapter.lessons.slice(0, max);
      result.push({ ...chapter, lessons });
      break;
    } else {
      result.push({ ...chapter });
      count += length;
      max = max - count;
    }
  }
  return result;
}
