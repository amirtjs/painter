window.addEventListener('load', function(){
    const convas = document.querySelector('#jsCanvas');
    let range = document.getElementById('jsRange');
    const ctx = convas.getContext('2d');
    const mode = document.getElementById('jsMode');
    const colors = document.getElementById('jsColors');
    const btnSave = document.getElementById('jsSave');
    const btnClear = document.getElementById('jsClear');


    convas.height = 700;
    convas.width = 700;


    ctx.lineWidth = range.value;
    ctx.strokeStyle = '#FF2018';
    ctx.fillStyle = '#FF2018';
    ctx.fillStyle = '#fff'
    ctx.fillRect(0,0,700,700)

   


    let painting = false;
    let filling = false;


    convas.addEventListener('mousemove', function(e){
        let x = e.offsetX
        let y = e.offsetY
        if(painting === false){
            ctx.beginPath()
            ctx.moveTo(x,y)
        }else{
            ctx.lineTo(x,y)
            ctx.stroke()
        }
    });

    convas.addEventListener('mousedown',function(){
        painting = true 
    });

    convas.addEventListener('mouseup',stopPainting);

    convas.addEventListener('mouseleav', stopPainting);

    function stopPainting(){
        painting = false;
    };
    
    colors.addEventListener('click', function(e){
        let color = e.target.style.backgroundColor;
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
    });

    range.addEventListener('change', function(){
        ctx.lineWidth = range.value;
    });


    mode.addEventListener('click', function(){
        if(filling === true){
            filling = false;
            mode.innerHTML = 'Заливка';
        } else{
            filling = true;
            mode.innerHTML = 'Рисование';
            
        };
    });

    convas.addEventListener('click', function(e){
        if(filling){
            ctx.fillRect(0,0, 700, 700);
        }
        
    });

    convas.addEventListener('contextmenu', function(e){
        e.preventDefault()
    });

    btnSave.addEventListener('click', function(e){
        let img = convas.toDataURL('image/png');
        let link = document.createElement('a');
        link.href = img;
        link.download = 'PaintJs'
        link.click()
    })

    btnClear.addEventListener('click', function(){
        ctx.fillStyle = '#fff'
        ctx.fillRect(0,0,700,700)
    })


    // window.addEventListener('change', function(){
    //     ctx.lineWidth = +localStorage.getItem('range')
    // })
    
});