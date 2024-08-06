export const getPreviewTemplate = ({
  title,
  content,
  imageUrl,
}: {
  title: string;
  content: string;
  imageUrl: string;
}) => {
  return `
<html>
  <head>
    <style>
        *{
          padding:0;
          margin:0;
          color: white;
        }
        .card {
            background: black;
            widht: 1200px;
            height: 630px;
            display:flex;
            flex-direction:column;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            font-family: Arial, sans-serif;
        }
        .card img {
            width: 50%;
            height: 50%;
            height: auto;
        }
        .card-content {
            padding: 5px;
        }
        .card-title {
            font-size: 1.5em;
            margin-bottom: 10px;
        }
        
    </style>
  </head>
<body>
<div class="card">
    <img src=${imageUrl}>
    <div class="card-content">
      <div class="card-title">${title}</div>
      <div class="card-text">${content}</div>
    </div>
</div>
</body>
</html>
    `;
};
