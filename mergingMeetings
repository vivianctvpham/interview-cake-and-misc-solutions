function mergeRanges(meetings) {

  // Merge meetings ranges
  //Input: Unsorted array of objects with meeting times
  //Sort the array so that potential merge times are right next to each other
  //Create a new array for the mergedMeetings
  //Loop through the sorted array to see if there are overlapping times
    //StartTime equals EndTime of meeting or when a startTime is less than an endTime
    //If they do overlap, take the latest time for the merge
  //Push into mergedMeetings array
  //Return mergedMeetings array
  
  const sortedArray = meetings.slice().sort(function(a,b) {
    return a.startTime > b.startTime? 1: -1;
  });
  
  const mergedArray = [sortedArray[0]];
  
  for (let i = 1; i < sortedArray.length; i++) {
    let currentMeeting = sortedArray[i];
    let lastMeeting = mergedArray[mergedArray.length -1];
    
    if (currentMeeting.startTime <= lastMeeting.endTime) {
      //If this overlap is true, you want to update the meetings so that 
      //the endTime is the latest between the two; "Merging the times" technically;
      
      lastMeeting.endTime = Math.max(currentMeeting.endTime, lastMeeting.endTime);
    } else {
      mergedArray.push(currentMeeting);
    }
  }
  
  return mergedArray;
}
