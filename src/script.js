function showTime() {
    const textMessageElement = document.getElementById("text-message");

    // Função para buscar o horário do Brasil
    async function getTimeForBrazil() {
        try {
            const response = await fetch("http://worldtimeapi.org/api/timezone/America/Sao_Paulo");
            const data = await response.json();
            const brazilTime = new Date(data.utc_datetime).toLocaleTimeString();
            return brazilTime;
        } catch (error) {
            console.error("Erro ao obter o horário:", error);
            return "Erro ao obter o horário";
        }
    }

    // Chama a função para obter o horário do Brasil
    getTimeForBrazil()
        .then((brazilTime) => {
            const timeElement = document.getElementById("time");
            timeElement.textContent = `Brasil: ${brazilTime}`;
            textMessageElement.style.display = "block";
        });
}