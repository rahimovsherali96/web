const tg = window.Telegram.WebApp;
tg.expand();

// USER INFO
const user = tg.initDataUnsafe.user;
document.getElementById("user").innerHTML = `
  👤 ${user.first_name} ${user.last_name || ""}
  <br>ID: ${user.id}
`;

// DEMO DATA (keyin backenddan keladi)
document.getElementById("status").innerText =
  "🦠 Holat: sog‘lom\n⚠️ Xavf: past\n🗓 Bugun: sug‘orish";

// CLOSE BUTTON
document.getElementById("close").onclick = () => {
  tg.close();
};
