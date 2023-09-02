import { useState, useEffect } from "react";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from 'next/router'; 
import { RustQuizdata } from "@/data/RustQuiz";

export const getStaticProps = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/quiz_req", {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  });
  const data = await res.json();
  console.log("data ",data);

  return {  props: { Recs: data,fallback: true } ,  };
  } catch (error) {
    console.log(error);
    return {  props: { Recs: RustQuizdata ,fallback: true } ,  };
  }
};

const index = ({ Recs }) => {
  let { data } = Recs;
  const length = data.length;
  const router = useRouter();
  const [i, setI] = useState(0);
  const [opt, setOpt] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [attempt, setAttempt] = useState(0);
  const [first, setfirst] = useState(data[i]);

  const optStyle ="p-2  border-2 border-separate   text-xl py-4 hover:bg-[#DA555B] flex gap-2"
  useEffect(() => {
    const timerId = setTimeout(() => incI(), 30000);
    const currentGreenElements =
      document.getElementsByClassName("bg-[#A62F34]");

    if (i != 0 && data[i - 1].Answer == opt) {
      setScore(score + 1);
      setOpt("");
    } else {
      setOpt("");
    }
    setfirst(data[i]);
    {/*if (i > 0) {
      document.getElementById("prevBtn").classList.add("hover:bg-[#462e2f]");
      document.getElementById("prevBtn").classList.add("cursor-pointer");
    }
    if (i == 0) {
      document.getElementById("prevBtn").classList.remove("hover:bg-[#462e2f]");
      document.getElementById("prevBtn").classList.remove("cursor-pointer");
    }*/}
    if (i == length - 1) {
      document.getElementById("nextBtn").classList.remove("hover:bg-slate-800");
      document.getElementById("nextBtn").classList.remove("cursor-pointer");
    }
    if (i == length - 2) {
      document.getElementById("nextBtn").classList.add("hover:bg-slate-800");
      document.getElementById("nextBtn").classList.add("cursor-pointer");
    }
    while (currentGreenElements.length > 0) {
      currentGreenElements[0].classList.remove("bg-[#A62F34]");
      setAttempt(attempt+1);
    }
    return () => {
      clearTimeout(timerId);
      setTimer(30);
    };
  }, [i]);

  useEffect(() => {
    if (timer > 0) {
      const timerId = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [timer]);

  const finish = ()=>{
    if (data[i].Answer === opt) {
      console.log(data[i].Answer," : ",opt);
      router.push(`/result/${(score+1)*2}?total=${length}&&correct=${score+1}&&incorrect=${attempt-(score+1)+1}&&attempt=${attempt+1}`)
    }
    else if(opt == ""){
      router.push(`/result/${score*2}?total=${length}&&correct=${score}&&incorrect=${attempt-score}&&attempt=${attempt}`)
    }
    else {
        console.log(data[i].Answer," : ",opt);
        router.push(`/result/${score*2}?total=${length}&&correct=${score}&&incorrect=${attempt-score+1}&&attempt=${attempt+1}`)
      }
    }

  const incI = () => {
    if (i < length - 1) {
      setI(i + 1);
    }
    else{
      finish()
    }
  };
  {/*const decI = () => {
    if (i > 0) {
      setI(i - 1);
    }
  };*/}

  function checkAns(a) {
    const currentGreenElements =
      document.getElementsByClassName("bg-[#A62F34]");
    while (currentGreenElements.length > 0) {
      currentGreenElements[0].classList.remove("bg-[#A62F34]");
    }
    document.getElementById(a).classList.add("bg-[#A62F34]");
    setOpt(a);
  }

  return (
    <div className="w-full p-8 h-[96vh]  border-red-800 border-solid flex flex-col ">
    <div className=" float-right flex justify-end">
    <div className=" bg-[#d44215d8] text-right text-2xl rounded-full border-2 w-fit p-4"> Time Left : {timer}</div>
    </div>
      {/*Quiz Part Start*/}
      <div className="flex flex-col   p-24 ${inter.className} min-h-[80vh]   justify-between">
        <div className="text-4xl">
          {i + 1} &#41; {data[i].Question}
        </div>
        <div
          id="a"
          onClick={() => checkAns("a")}
          className={`${optStyle}`}
              >
          <div>a&#41;</div>
          <div>{data[i].Options.a}</div>
        </div>
        <div
          id="b"
          onClick={() => checkAns("b")}
          className={`${optStyle}`} 
          >
          <div>b&#41;</div>
          <div>{data[i].Options.b}</div>
        </div>
        <div
          id="c"
          onClick={() => checkAns("c")}
          className={`${optStyle}`}
        >
          <div>c&#41;</div>
          <div>{data[i].Options.c}</div>
        </div>
        <div
          id="d"
          onClick={() => checkAns("d")}
          className={`${optStyle}`}
        >
          <div>d&#41;</div>
          <div>{data[i].Options.d}</div>
        </div>
        <div className="flex w-full text-center  "></div>
      </div>

      {/*Quiz Part End*/}
      <div className="flex w-full justify-center text-center gap-8 ">
        {/*<div
          id="prevBtn"
          className=" text-xl w-1/3  p-4 bg-[#5b3c3e] hover:bg-[#462e2f] border-2 border-white"
          onClick={decI}
        >
          Prev
        </div> */}
        
        <div
          className="text-xl w-1/3  p-4 bg-[#ff2e38] hover:bg-red-700 border-2 border-white" onClick={ finish }
        >
          Finish
        </div>
        <div
          id="nextBtn"
          className="text-xl w-1/3  p-4 bg-slate-700 hover:bg-slate-800 border-2 border-white cursor-pointer"
          onClick={()=>{
            if(i<length-1){
              incI()
            }
          }
        }
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default index;
