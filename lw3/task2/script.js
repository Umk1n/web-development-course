function isTimeRangesIntersect(timeRange1, timeRange2) {
  const timeRange1Start = new Date('2021-01-01 ' + timeRange1[0]);
  const timeRange1Finish = new Date('2021-01-01 ' + timeRange1[1]);
  const timeRange2Start = new Date('2021-01-01 ' + timeRange2[0]);
  const timeRange2Finish = new Date('2021-01-01 ' + timeRange2[1]);
  if(timeRange1Start.getTime() > timeRange2Finish.getTime()){
    return false;
  }
  if(timeRange2Start.getTime() > timeRange1Finish.getTime()){
    return false;
  }
  return true;
}
