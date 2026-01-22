import React, { useState, useEffect, useRef, Activity } from 'react';
import { BsSend } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
const Chat = () => {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hello! How can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Auto-scroll to the bottom when messages change
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        // Simulate API Call
        setTimeout(() => {
            const aiResponse = {
                role: 'assistant',
                content: "This is a simulated response. In a real app, you'd fetch this from an LLM API."
            };
            setMessages((prev) => [...prev, aiResponse]);
            setIsLoading(false);
        }, 1000);
    };
    const modalRef = useRef(null)


    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <>
            <div className="relative flex min-h-screen text-foreground justify-center z-6">
                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col relative p-4 max-w-2xl py-10">
                    <div className=" space-y-2 flex-1 pb-32 text-sm">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`py-1.5 px-3 ${msg.role === 'assistant' ? '' : 'border border-foreground/30 w-fit rounded-full ml-auto'}`}
                            >
                                <div>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="max-w-3xl mx-auto px-14 py-4 text-gray-400 animate-pulse">
                                Thinking...
                            </div>
                        )}
                        <div ref={messagesEndRef} />

                        {/* Input Area */}
                        <div className="fixed bottom-0 w-full left-0 flex justify-center px-4 pb-2 z-2 shadow-none">
                            <div className='w-full max-w-2xl flex justify-between border border-foreground/30 rounded-full px-2 py-1.5'>
                                <div className='w-[98%] flex gap-2 relative'>
                                    <div ref={modalRef} className='relative w-[max(2.9vw,36px)] aspect-square border  border-foreground/30 hover:border-zinc-600 hover:bg-background text-white rounded-full grid place-items-center cursor-pointer hover:scale-[0.9] transition-all' onClick={() => {
                                        setIsModalOpen(prev => !prev)
                                    }}>
                                        <IoMdAdd size={24}
                                            className={`${isModalOpen && 'rotate-45'} transition-all`}
                                        />
                                    </div>
                                    {/* Modal */}
                                    <Activity mode={isModalOpen ? 'visible' : 'hidden'}>
                                        <div className='border  border-foreground/30 text-white absolute -top-29 -left-2 z-2 rounded-md transition-all'>
                                            <label htmlFor="pdf-input" className='flex items-center gap-1 hover:bg-zinc-900/80 px-2 min-w-26 py-1 border-b border-zinc-500 cursor-pointer'>
                                                <IoMdAdd size={14} /> PDF
                                                <input type="file" hidden id='pdf-input' />
                                            </label>
                                            <label htmlFor="text-input" className='flex items-center gap-1 hover:bg-zinc-900/80 px-2 min-w-26 py-1 border-b border-zinc-500 cursor-pointer'>
                                                <IoMdAdd size={14} /> Text
                                                <input type="file" hidden id='text-input' />
                                            </label>
                                            <label htmlFor="image-input" className='flex items-center gap-1 hover:bg-zinc-900/80 px-2 min-w-26 py-1 cursor-pointer'>
                                                <IoMdAdd size={14} /> Image
                                                <input type="file" hidden id='image-input' />
                                            </label>
                                        </div>
                                    </Activity>
                                    <div className="w-full flex items-center">
                                        <input
                                            className="w-full text-white focus:outline-none"
                                            placeholder="Ask your query"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                        />
                                    </div>
                                </div>
                                <div className='w-[10%] flex justify-end'>
                                    <button
                                        onClick={handleSend}
                                        className="w-[max(2.9vw,36px)] pt-0.5 pr-0.5 aspect-square border  border-foreground/30 hover:border-zinc-600 hover:bg-zinc-900 text-white rounded-full cursor-pointer grid place-items-center  hover:scale-[0.9] transition-all"
                                    >
                                        <BsSend size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className='w-screen h-screen bg-background text-foreground fixed top-0 left-0 z-1 grid place-items-center'>
                <img className='w-full h-full object-cover scale-[1] animate-myspin opacity-5 transform translate-y-50' src="moon.png" alt="" />
            </div>
        </>
    );
};

export default Chat;

{/* */ }