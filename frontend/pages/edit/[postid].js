import { useRouter } from 'next/router'
import React, { useState } from "react";
import Link from 'next/link'
import axios from "axios";
import Navbar from "../components/Navbar";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("../components/Editor"), { ssr: false });

const draft = () => {

    const router = useRouter()
    const { postid } = router.query

    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [description, setDescription] = useState("");

    return (
      <div>
      <Navbar />
      <div className="text-center up user-container-draft">
          <h2 className="mt-5"> Add a New Post </h2>
          <div>
              <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Post Title"
                  autoComplete="off"
                  // style={{ width: "1000px" }}
                  className="mt-3 pt-2 pb-2 pr-2 pl-2 w-75"
                  required
              />
          </div>
          <div>
              <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company tag"
                  autoComplete="off"
                  // style={{ width: "50rem" }}
                  className="mt-3 pt-2 pb-2 pr-2 pl-2 w-75"
                  required
              />
          </div>
          <div>
              <Editor/>
          </div>
          <div className="draft-actions">
              <button onClick={() => save()} className="btn btn-dark mt-3 mb-3"> Save </button>
              <button onClick={() => post()} className="btn btn-dark mt-3 mb-3"> Post </button>
          </div>
      </div>
  </div>
  )
}

export default draft