import Heading from "@/components/Heading";
import Divider from "@/components/Divider";
import Socials from "@/components/Socials";
import PageLayout from "@/components/PageLayout";
import {useState} from "react";

export default function Index() {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Posting your mail...");
    const formData = new FormData(event.target);

    formData.append("access_key", "1bcb985c-f96b-483b-b38a-1ef761bdf87e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you for your message!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <PageLayout title="contact">
      <div className="pt-16 pb-8">
        <Heading className="mb-6" title="i’m just a message away 💬"
                 subtitle="let’s make selling stuff more fun and creative!"/>
      </div>

      <div className="container mx-auto max-w-screen-md px-4">

        <form onSubmit={onSubmit}>
          {result && <p className="bg-neutral-100 text-gray-600 font-medium rounded mb-4 px-4 py-3">{result}</p>}

          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-400 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Drop me a message"
              required
            >
          </textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white rounded px-4 py-3 text-xs hover:shadow-xl hover:bg-gray-700 cursor-pointer"
          >
            Submit Form
          </button>

        </form>
      </div>

      <Divider className="mt-16"/>

      <Socials/>

    </PageLayout>
  )
}