// [How to remove a duplicate object from an array based on two object properties](https://www.reddit.com/r/learnjavascript/comments/hsjqnd/how_to_remove_a_duplicate_object_from_an_array/fybbxw8/)

const records = [ 
  {
    email: 'test@test.com',
    surveyId: '123abc',   
    choice: 'yes'  
  },  
  {
    email: 'test@test.com',
    surveyId: '123abc',
    choice: 'no'
  }
];

// 复用字典特性，惟一 key，发生重复时后插入者保留
const uniqueKeyToRecord = new Map(
  records.map(r => [r.email+'\t'+r.surveyId, r]));
const uniqueRecords = [...uniqueKeyToRecord.values()]; 
console.log(uniqueRecords) 

[...(new Map([[1, 2], [2, 3]]).values())] // [2, 3]
