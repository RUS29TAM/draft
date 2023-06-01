import '../App.css';
import axios from "axios";

const Blogs = () => {

    // let XDomainRequest = 'https://draft-five.vercel.app/blogs';
    // let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    //
    // // @ts-ignore
    // let xhr = new XHR();
    //
    // xhr.open('GET', 'https://forms.yandex.ru/cloud/6476ff3cc417f301c195c8d1/', true);
    //
    // xhr.onload = function() {
    //     alert( this.responseText );
    // }
    //
    // xhr.onerror = function() {
    //     alert( 'Ошибка ' + this.status );
    // }
    //
    // xhr.send()

    // async function fetchYa() {
    //     try {
    //         const url = 'https://forms.yandex.ru/cloud/6476ff3cc417f301c195c8d1';
    //         const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    //         const response = await axios.get(proxyUrl + url, {headers: {'X-Requested-With': 'XMLHttpRequest'}});
    //         return response.data;
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    async function fetchYa() {
        try {
            const url = 'https://forms.yandex.ru/cloud/6476ff3cc417f301c195c8d1';
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const response = await axios.get(proxyUrl + url, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': 'b0ba0aeecfb545598d9964c0700dea76',
                    'X-Org-ID': 'd963422980c3406cb1b8039f322d776c',
                }
            });
            return response.data;
        } catch (e) {
            // @ts-ignore
            if (e.response && e.response.status === 403) {
                console.log("Недостаточно учетных данных для авторизации. Пожалуйста, проверьте свои разрешения.");
            } else {
                // @ts-ignore
                console.log('Error: ', e.message);
            }
        }
    }

    return (
        <div className={'wrapper'}>
            <h1>Blog Articles</h1>
            <button onClick={fetchYa} style={{background: '#d95ffb'}}>GET POSTS</button>
        </div>
    );
};

export default Blogs;