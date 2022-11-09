const addbutton=document.querySelector("#addNew")

const updateLSData=()=>{
        const textAreaData=document.querySelectorAll('textarea');
        const notes=[];
        console.log(textAreaData);
        textAreaData.forEach((note) => notes.push(note.value));
        console.log(notes);

        localStorage.setItem('notes',JSON.stringify(notes));

}

addNewNote=(text="")=>{
    const note=document.createElement('div');
    note.classList.add('textarea-container');

    const htmlContent=` <i class="fas fa-pen-square" id="edit"></i>
                        <i class="fas fa-trash" id="delete"></i>
                        <textarea rows="8" cols="30" class="${text ? "hidden":""}"></textarea>`;

    note.insertAdjacentHTML('afterbegin',htmlContent);
    

    const mainDiv=note.querySelector(".main");
    const textArea=note.querySelector('textarea');
    const editbutton=note.querySelector("#edit");
    const delbutton=note.querySelector("#delete");

    textArea.value=text;
    
    delbutton.addEventListener('click',()=>{
            note.remove();
            updateLSData();
    }); 

    editbutton.addEventListener('click',()=>{
        textArea.classList.toggle('hidden');
    });

    textArea.addEventListener('change',(event)=>{
        const value=event.target.value;
        updateLSData();
    });
     
    document.body.appendChild(note); 
    }

const notes=JSON.parse(localStorage.getItem('notes'));
if(notes){
    notes.forEach((note)=>addNewNote(note));
}

addbutton.addEventListener('click',()=>addNewNote());
