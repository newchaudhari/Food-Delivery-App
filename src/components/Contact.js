const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl m-4 p-4">Contact Us</h1>
      <div className="flex flex-col ">
        <input
          type="text"
          placeholder="name"
          className="w-2/12 mx-auto my-2 p-2 border border-black rounded"
        />
        <input
          type="text"
          placeholder="surname"
          className="w-2/12 mx-auto my-2 p-2 border border-black rounded"
        />
        <button className="w-2/12 mx-auto my-2 p-2 border border-black rounded bg-green-200 hover:bg-green-500 text-lg font-bold">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
