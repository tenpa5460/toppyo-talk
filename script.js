let topics = [];

function loadTopics(mode) {
    fetch(`topics/${mode}.json`)
        .then(response => response.json())
        .then(data => {
            topics = data;
            showRandomTopic();
        })
        .catch(error => {
            console.error('お題の読み込みに失敗しました:', error);
            document.getElementById("topic").innerText = "お題の読み込みに失敗しました。";
        });
}

function showRandomTopic() {
    if (topics.length === 0) {
        document.getElementById("topic").innerText = "先にモードを選んでください。";
        return;
    }
    const randomIndex = Math.floor(Math.random() * topics.length);
    document.getElementById("topic").innerText = topics[randomIndex];
}
