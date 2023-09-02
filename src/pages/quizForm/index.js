import React from 'react'

const index = () => {
    const optStyle = 'w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-opacity-50 text-black'
  return (
  
      <div className="min-h-screen flex items-center justify-center ">
      <div className="p-6 rounded-lg bg-red-950 border-white border-2 w-[60vw] shadow-2xl shadow-red-500">
          <h1 className="text-2xl font-semibold">Question Form</h1>
          <form method='POST' action='/api/quiz_req' className='flex flex-col gap-2'>
              <div className="space-y-2">
                  <label for="question" className="block font-medium">Question:</label>
                  <input type="text" id="question" name="Question" placeholder="Enter the Question" className={`${optStyle}`} required/>
              </div>
              <div className="space-y-2">
                  <label className="block font-medium">Options:</label>
                  <div className="grid grid-cols-[5%_95%] gap-1 align-middle text-center items-center">
                      <div>A</div><input type="text" name="a" placeholder="Option A ..." className={`${optStyle}`}/>
                      <div>B</div><input type="text" name="b" placeholder="Option B ..." className={`${optStyle}`} required/>
                      <div>C</div><input type="text" name="c" placeholder="Option C ..." className={`${optStyle}`} required/>
                      <div>D</div><input type="text" name="d" placeholder="Option D ..." className={`${optStyle}`} required/>
                  </div>
              </div>
              <div className="space-y-2  ">
              <label for="answer" className="block font-medium">Answer:</label>
                  <select id="answer" name="Answer" class="w-full text-black px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-opacity-50" required>
                  <option value="" disabled selected>Select an answer</option>
                  <option value="a">Option A</option>
                  <option value="b">Option B</option>
                  <option value="c">Option C</option>
                  <option value="d">Option D</option>
                  </select>
              </div>
              <button type="submit" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md">Submit</button>
          </form>
      </div>
  </div>
  )
}

export default index


{ 
  /* <div>
  <form method='POST' action='/api/quiz_req'>
<label name="Question"> Enter Question</label>
<input type='text' name='Question'/>
<label name="Option_1"> Enter Option 1</label>
<input type='text' name='Option_1'/>
<label name="Option_2"> Enter Option 2</label>
<input type='text' name='Option_2'/>
<label name="Option_3"> Enter Option 3</label>
<input type='text' name='Option_3'/>
<label name="Option_4"> Enter Option 4</label>
<input type='text' name='Option_4'/>
<label name="Answer"> Select Correct Option</label>
<select  name='Answer'>
<option value="Option_1">Option 1</option>
<option value="Option_2">Option 2</option>
<option value="Option_3">Option 3</option>
<option value="Option_4">Option 4</option>
</select>

<button type='submit'>Submit</button>
</div>
 </form>  */}