// application programming interface API
let video = document.querySelector("video");
let  recordBtnCont = document.querySelector(".record-btn-cont");
let recordBtn = document.querySelector(".record-btn");

let recordFlag = false;

let recorder; // store undefined
let chunks = [] // media data is stored in chunks
let constraints ={
    audio:true,
    video:true,
}
/// navigator is s global object where this gives the information about the
//  info about the browser

navigator.mediaDevices.getUserMedia(constraints)
.then((stream)=>{
    video.srcObject = stream; // src and the srcObject
    recorder = new MediaRecorder(stream);
    recorder.addEventListener("start",(e)=>{
        chunks =[];

    })
    recorder.addEventListener("dataavaliable",(e)=>{
        chunks.push(e.data);
    })
    recorder.addEventListener("stop",(e)=>{
        /// convert the media chunks data into video
        let blob = new Blob(chunks,{type:"vide/mp4"})
        let videoURL = URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = videoURL;
        a.download = "stream.mp4"
        a.click();
    })

    recordBtnCont = addEventListener("click",(e)=>{
        if(!recorder) return;
        recordFlag =!recordFlag;
        if(recordFlag){
            //start
            recorder.start()
            recordBtn.classList.add("scale-record")
        }else{
            recorder.stop();
            recordBtn.classList.remove("scale-recording")
        }
    })

});

