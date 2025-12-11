import { useState } from "react";

export default function NotForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [err, setErr] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const note = { title, description };
    console.log(note);
    console.log(err);

    const res = await fetch("/api/notlar", {
      method: "POST",
      body: JSON.stringify(note),
      headers: { "Content-Type": "application/json" },
    });
    const json = await res.json();
    console.log(json);

    if (!res.ok) {
      setErr(json.err || json.error || json.message || "Bir hata oluştu");
      return;
    }

    if (res.ok) {
      setErr(null);
      setDescription("");
      setTitle("");
      console.log("Yeni Bir Not Eklendi!!!");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>🌿Yeni bir Not Ekle :</h3>
      <div className="create-group">
        <div>
          <label>💜Not Başlık:</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div>
          <label>💜 Not Açıklama:</label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
      </div>

      <button type="submit">EKLE</button>
      {err && <div className="error">{err}</div>}
    </form>
  );
}
