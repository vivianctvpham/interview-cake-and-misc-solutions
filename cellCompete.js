/*
Problem: 
A colony of eight houses, represented as cells, are arranged in a straight line. Each day evry cell competes with its adjacent cells (neighbours).
An integer value of 1 represents an active cell and value of 0 represents as inactive cell. If both the neighbours are either active or inactive, 
the cell becomes inactive the next day, otherwise it becomes active on the next day. 

The two cells on the ends have a single adjacent cell, so the other adjacent cell can be assumed to be always inactive. Even after updating the cell state, 
its previous state is considered for updating the state of other cells. The cell information of all cells should be updated simultatiously. 

Write an algorithm to output the state of the cells after the given number of days.
Note: the elements of the list states contains 0s or 1s only
*/

function cellCompete(states, days) {
//You want to do the process once each day;
for (let i = 1; i < days; i++){
//This is where I will store the temp values as we iterate through
let result = [];

//Go through to check the last state of the cell
states.forEach((state, i) => {

// If we are on the first cell, the left cell value should be 0, otherwise it should be the value of the prev cell state
let left = (i === 0) ? 0 : states[i - 1];

// If we are on the last cell, the right cell value should be 0; otherwise it should be the value of the next cell state
let right = (i === states.length - 1) ? 0 : states[i + 1];

// If left and and right values equal to each other, we want to store 0 (inactive); If they don't, store 1 (active)
left === right ? result.push(0) : result.push(1)
})

// Now we update, the values

states = result

}

return states;

}
