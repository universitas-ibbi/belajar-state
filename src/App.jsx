import { useState } from "react";

export default function App() {
  const [daftar, setDaftar] = useState([]);
  const [beli, setBeli] = useState([]);
  const [item, setItem] = useState("");

  function bacaInputItem(event) {
    setItem(event.target.value);
  }

  function tambahDaftar() {
    if (item) {
      setDaftar([...daftar, item]);
      setItem("");
    }
  }

  function hapusItem(index) {
    setDaftar(daftar.filter((item, i) => i !== index));
  }

  function beliItem(index) {
    setBeli([...beli, daftar[index]]);
    setDaftar(daftar.filter((item, i) => i !== index));
  }

  function batalBeli(index) {
    setDaftar([...daftar, beli[index]]);
    setBeli(beli.filter((item, i) => i !== index));
  }

  return (
    <>
      <h1>Daftar Belanjaan</h1>
      <input type="text" value={item} onChange={bacaInputItem} />
      <button onClick={tambahDaftar}>Tambah</button>
      <ul>
        {daftar.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => beliItem(index)}>Sudah dibeli</button>
            <button onClick={() => hapusItem(index)}>Hapus</button>
          </li>
        ))}
      </ul>
      <h1>Daftar sudah dibeli</h1>
      <ul>
        {beli.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => batalBeli(index)}>Batal</button>
          </li>
        ))}
      </ul>
    </>
  );
}
