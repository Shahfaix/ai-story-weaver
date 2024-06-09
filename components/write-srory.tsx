"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { FaRegCopy } from "react-icons/fa";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

const WriteStory: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [acceptedStory, setAcceptedStory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const str1 =
    ". Please continue this story after initial content, do not use difficult words and do not change the initial content I given to you and give atleast 100 character suggestion";
  const { user } = useUser();
  
  const handleSubmit = async () => {
    const updatedInput = input.concat(str1);
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/chat", {
        messages: updatedInput,
      });
      setResponse(response.data.response);
      console.log(response.data.response);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
    setLoading(false);
  };

  const handleEndStory = async () => {
    const updatedInput = input.concat(str1);
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/user", {
        story: input,
        title: title,
        user_id: user?.id,
      });
      console.log(response.data.response);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
    setLoading(false);
    // Clear the input fields
    setTitle("");
    setInput("");
  };

  const handleAccept = () => {
    setAcceptedStory(response);
    setInput(response);
    setResponse("");
  };

  const handleDecline = () => {
    setResponse("");
    handleEndStory();
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>
            <textarea
              className="p-1 active:outline-none rounded"
              placeholder="Write your story here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={1}
              ref={textAreaRef}
            ></textarea>
          </div>
          <div className="flex flex-col">
            <div className="mt-2">
              <Button
                className="w-full"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Loading..." : "AI Suggestion"}
              </Button>
            </div>
            <div className="mt-2">
              <Button
                className="w-full"
                variant="destructive"
                onClick={handleDecline}
                disabled={loading}
              >
                {loading ? "Loading..." : "End Story"}
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
            <Button className="w-1/2" onClick={handleAccept} disabled={loading}>
              {loading ? "Loading..." : "Accept Suggestions"}
            </Button>
            <Button
              className="w-1/2"
              variant="destructive"
              onClick={handleDecline}
              disabled={loading}
            >
              {loading ? "Loading..." : "Decline Suggestions"}
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
