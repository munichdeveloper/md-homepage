import axios from 'axios';
import { useRouter } from 'next/router';

export default function SubscribeBox() {
    const router = useRouter();

    async function submitForm(event) {
        event.preventDefault();

        var bodyFormData = new FormData();
        bodyFormData.append('fields[email]', event.target.email.value);

        const resp = await axios(
            {
                headers: { "Content-Type": "multipart/form-data" },
                method: 'post',
                url: 'https://assets.mailerlite.com/jsonp/471723/forms/100780932077717361/subscribe',
                data: bodyFormData
            }
        );
        console.log(resp);

        router.push('/subscription-confirmation');
    }

    return (
        <form onSubmit={submitForm}>
            <div className="bg-[#f2ff0095]">
                <div className="subscribe-box container">
                    <div className="py-3 text-xl md:text-2xl">
                        Newsletter abonnieren:
                    </div>
                    <div className="py-3">
                        <input type="email" name="email" className="p-2 rounded-[20px] min-w-[2rem] lg:min-w-[20rem] leading-7" placeholder="E-Mail Addresse" />
                    </div>
                    <div className="py-3 pl-2">
                        <button className="bg-[#f2ff00] py-2 px-4 rounded-[20px] hover:underline leading-10 text-md cta-button" type="submit">
                            Zum Newsletter anmelden
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}