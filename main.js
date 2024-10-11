function getValues() {
    let width = parseInt(document.getElementById('width').value);
    let height = parseInt(document.getElementById('height').value);

    let lebar = `w-[${width}px]`;
    let tinggi = `h-[${height}px]`;

    let templet = [lebar, tinggi, 'shadow-xl', 'border-2', 'border-black'];

    let kotak = document.getElementById('kotak');
    templet.forEach(cls => kotak.classList.add(cls));

    console.log(`Classes added: ${templet.join(' ')}`);
}

