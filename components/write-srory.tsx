"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { FaRegCopy } from "react-icons/fa";
import axios from "axios";

const WriteStory = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [acceptedStory, setAcceptedStory] = useState("");

  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const str1 =
    ". Please continue this story after initial content ,do not use difficult words and do not change the initial content I given to you";

  const handleSubmit = async () => {
    const updatedInput = input.concat(str1);
    try {
      const response = await axios.post("http://localhost:3000/api/chat", {
        messages: updatedInput,
      });
      setResponse(response.data.response);
      console.log(response.data.response);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const handleAccept = () => {
    setAcceptedStory(response);
    setInput(response); // Update the input state with the accepted story
    setResponse(""); // Optionally clear the response after accepting
  };

  const handleDecline = () => {
    setResponse("");
  };

  return (
    <div className="flex items-center justify-evenly w-full px-4">
      <div>
        <div className="mt-20">
          <div className="text-neutral-950 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 p-2 w-[30rem] rounded flex flex-col space-y-2">
            <span>Start a story</span>
            <textarea
              className="p-1 active:outline-none"
              placeholder="Write title for the story"
            ></textarea>
            <textarea
              className="p-1 active:outline-none rounded"
              placeholder="Write your story here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={1}
              ref={textAreaRef} // Corrected reference name
            ></textarea>
          </div>
          <div className="flex flex-col">
            <div className="mt-2">
              <Button className="w-full" onClick={handleSubmit}>
                AI Suggestion
              </Button>
            </div>
            <div className="mt-2">
              <Button
                className="w-full"
                variant="destructive"
                onClick={handleDecline}
              >
                End Story
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-12">
          <div className="mb-2 flex justify-end">
            <FaRegCopy />
          </div>
          <div className="text-neutral-950 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 p-2 w-[30rem] rounded flex flex-col space-y-2">
            <span>AI Suggestions</span>
            {response ? <div>{response}</div> : <></>}
          </div>
          <div className="mt-2 flex gap-2">
            <Button className="w-1/2" onClick={handleAccept}>
              Accept Suggestions
            </Button>
            <Button
              className="w-1/2"
              variant="destructive"
              onClick={handleDecline}
            >
              Decline Suggestions
            </Button>
          </div>
        </div>
        <div className="mt-12">
          <div className="text-neutral-950 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 p-2 w-[30rem] rounded flex flex-col space-y-2">
            <span>Accepted Story</span>
            {acceptedStory ? (
              <div>{acceptedStory}</div>
            ) : (
              <div>No story accepted yet.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteStory;