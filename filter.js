const numbers = [1,5,6,4,15];
const players = [75 , 65 , 72, 55 , 59 , 67];
const selection = players.filter(p => p > 80);
const selected = players.filter(p => p % 2 === 1);
console.log(selection);
console.log(selected);
const friends = ['Tom','John','Oliver', 'Saimon' , 'Tim'];
const oddFriends = friends.filter(friend => friend.length > 4);
console.log(oddFriends);