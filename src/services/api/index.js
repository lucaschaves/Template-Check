import axios from "axios";

const api = axios.create({
  baseURL:
    "https://trello-attachments.s3.amazonaws.com/5c503c394df1a07c63914726/5c63338891cf7a59b8d25468/8f398da8e16af194561b8f0a3e448927"
});

export default api;
