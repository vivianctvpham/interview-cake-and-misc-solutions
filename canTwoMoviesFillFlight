function canTwoMoviesFillFlight(movieLengths, flightLength) {

  // Determine if two movie runtimes add up to the flight length
  //Input: array of ints, and int
    //Assume user will watch exactly two movies
    //Don't make users watch the same movie twice
    //Optimize for runtime over memory (faster)
    
    //Loop through movieLength, having i act as the firstMovie
    //Add a check to see if the secondMovie = firstMovie - flightLength
  //Output: Boolean, whether two items in the movieLengths array = flightLength
  const seen = {};
  
  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieLength = movieLengths[i];
    
    const compSecondMovieLength = flightLength - firstMovieLength;
    
    if (compSecondMovieLength in seen) {
      return true
    };
    
    seen[movieLengths[i]] = i;
  }
  
return false;
}
