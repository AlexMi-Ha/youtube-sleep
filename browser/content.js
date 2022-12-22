window?.addEventListener("load", () => {
    document.getElementsByTagName("video")[0]?.addEventListener("ended", () => { console.log("end lel"); })
    console.log("[Youtube-Sleep-Injection] Tried adding the video ended callback");
});