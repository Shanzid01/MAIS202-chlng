async function loadLocalFile(component) {
    var input, file, fr;

    if (typeof window.FileReader !== 'function') {
        alert("The file API isn't supported on this browser yet.");
        return;
    }

    input = document.getElementById(component);
    if (!input) {
        alert("Um, couldn't find the fileinput element.");
    }
    else if (!input.files) {
        alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
        alert("Please select a file");
    }
    else {
        file = input.files[0];
        /*fr = new FileReader();
        fr.onload = ()=>{
            try{
                let parsedData=$.csv.toObjects(fr.result);
                return(parsedData);
            }catch(e){
                alert(e);
                return null;
            }
        };*/
        try{
            let results=await readFile(file);
            let parsedData=$.csv.toObjects(results);
            return(parsedData);
        }catch(e){
            alert(e);
            return null;
        }
    }
}

function readFile(file){
    return new Promise((resolve, reject) => {
      var fr = new FileReader();  
      fr.onload = () => {
        resolve(fr.result);
      };
      fr.readAsText(file);
    });
  }