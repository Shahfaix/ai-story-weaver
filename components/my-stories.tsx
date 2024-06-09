"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import Modal from "./modal/EditModal";
import { useForm, SubmitHandler } from "react-hook-form";

interface Story {
  _id: string;
  title: string;
  story: string;
  createdAt: string;
}

interface FormInputs {
  title: string;
  story: string;
}

const MyStories: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [currentUser, setCurrentUser] = useState<string>("");
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(storedUser.replace(/"/g, "")); // Remove any quotes
    }
  }, []);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        if (currentUser) {
          setLoading(true); // Start loading
          const res = await axios.get(
            `http://localhost:3000/api/user?Story_id=${encodeURIComponent(
              currentUser
            )}`
          );
          const storiesArray = Array.isArray(res.data.story)
            ? res.data.story
            : [res.data.story]; // Convert single object to array
          setStories(storiesArray);
          setLoading(false); // End loading
        }
      } catch (error) {
        console.error("Failed to fetch stories:", error);
        setLoading(false); // End loading in case of error
      }
    };

    fetchStories();
  }, [currentUser]);

  const { register, handleSubmit, reset } = useForm<FormInputs>();

  const onEdit = (story: Story) => {
    setSelectedStory(story);
    reset(story);
    setIsModalOpen(true);
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    if (!selectedStory) return;

    try {
      setLoading(true); // Start loading
      const updatedData = { ...data, _id: selectedStory._id };
      const res = await axios.put(
        "http://localhost:3000/api/user",
        updatedData
      );
      setStories(
        stories.map((story) =>
          story._id === selectedStory._id ? res.data.story : story
        )
      );
      setIsModalOpen(false);
      setLoading(false); // End loading
    } catch (error) {
      console.error("Failed to update story:", error);
      setLoading(false); // End loading in case of error
    }
  };

  return (
    <div className="bg-yellow-100 flex items-center justify-center w-3/4">
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <>
          <Table>
            <TableCaption className="text-neutral-950">
              Your Story list.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-neutral-950">Serial number</TableHead>
                <TableHead className="text-neutral-950">Story title</TableHead>
                <TableHead className="text-neutral-950">Submit date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stories.length > 0 ? (
                stories.map((story, index) => (
                  <TableRow key={story._id} onClick={() => onEdit(story)}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{story.title}</TableCell>
                    <TableCell>
                      {new Date(story.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <FiEdit />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    No stories found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  className="mt-1 block w-full border border-gray-300 rounded-md"
                  {...register("title", { required: true })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Story
                </label>
                <textarea
                  className="mt-1 block w-full border border-gray-300 rounded-md"
                  rows={10}
                  {...register("story", { required: true })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </form>
          </Modal>
        </>
      )}
    </div>
  );
};

export default MyStories;
