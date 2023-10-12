import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SubscribeBox() {
    const router = useRouter();
    const [showError, setShowError] = useState(false);

    async function submitForm(event) {
        event.preventDefault();
        const email = event.target.email.value;
        var bodyFormData = new FormData();
        bodyFormData.append('fields[email]', email);

        if (!email) {
            setShowError(true);
        } else {
            const resp = await axios(
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    method: 'post',
                    url: 'https://assets.mailerlite.com/jsonp/471723/forms/100780932077717361/subscribe',
                    data: bodyFormData
                }
            );

            if (resp.status == 200) {
                router.push('/subscription-confirmation');
            }
        }
    }

    return (
        <div className='pt-10 md:pt-[8rem]'>
            <form onSubmit={submitForm}>
                <div className="bg-[#f2ff0060] border-t border-accent1">
                    <div className="subscribe-box container">
                        <div className="py-3 text-xl md:text-2xl">
                            Newsletter abonnieren:
                        </div>
                        <div className="py-3">
                            <input onFocus={() => setShowError(false)} type="email" name="email" className="p-2 rounded-[20px] min-w-[2rem] lg:min-w-[20rem] leading-7 border-black border-2" placeholder="E-Mail Addresse" />
                            {showError && <div className='text-red-600'>Bitte eine E-Mail Adresse eintragen</div>}
                        </div>
                        <div className="py-3">
                            <button className="py-2 px-4 rounded-[20px] hover:underline leading-10 text-md cta-button" type="submit">
                                Zum Newsletter anmelden
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}