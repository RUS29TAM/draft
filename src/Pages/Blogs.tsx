import '../App.css';
import axios from "axios";

const Blogs = () => {

    let XDomainRequest = 'https://draft-five.vercel.app/blogs';
    let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

    // @ts-ignore
    let xhr = new XHR();

    xhr.open('GET', 'https://forms.yandex.ru/cloud/6476ff3cc417f301c195c8d1/', true);

    xhr.onload = function() {
        alert( this.responseText );
    }

    xhr.onerror = function() {
        alert( 'Ошибка ' + this.status );
    }

    xhr.send()


    async function fetchYa() {
        try {
        const response = await axios.get('https://forms.yandex.ru/cloud/6476ff3cc417f301c195c8d1/', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://draft-five.vercel.app/blogs',
                'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization',
            }
        })
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className={'wrapper'}>
            <h1>Blog Articles</h1>
            <button onClick={fetchYa} style={{background: 'skyblue'}}>GET POSTS</button>
        </div>
    );
};

export default Blogs;