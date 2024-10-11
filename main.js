document.addEventListener('DOMContentLoaded', function () {
    function getValues() {
        let width = parseInt(document.getElementById('width').value);
        let height = parseInt(document.getElementById('height').value);

        let lebar = `w-[${width}px]`;
        let tinggi = `h-[${height}px]`;

        let templet = [lebar, tinggi, 'shadow-xl', 'border-2', 'border-black'];

        let kotak = document.getElementById('kotak');
        templet.forEach(cls => kotak.classList.add(cls));

        let text = `Classes added: ${templet.join(' ')}`

        let code = document.getElementById('code').innerHTML = text
    }

    document.querySelector('button').onclick = getValues;
});
