import React, { useState } from "react";

// Declaring outside component to avoid recreation on each render
const emptyPlayer = {
  score: "",
  name: "",
};

export default function NewHighscore({ score }) {
  const [player, setPlayer] = useState(emptyPlayer);

  function handleChange(e) {
    // TODO     https://app.pluralsight.com/course-player?clipId=37aac786-b3e8-4f38-ad64-75fd2dbe7862      episode 6
  }

  function handleBlur(event) {
    // TODO
  }
  
  async function handleSubmit(event) {
    // TODO
    setPlayer(emptyPlayer);
  }

  return (
    <>
      <h1>New High Score</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city">Name</label>
          <br />
          <input
            id="playername"
            type="text"
            value={player}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>

         

        <div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Save"
          />
        </div>
      </form>
    </>
  );
}
