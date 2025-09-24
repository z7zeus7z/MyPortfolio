const CTA = (props) => {
  const { link, text, download } = props;

  return (
    <>
      {download ? (
        
        <a href={link} download={download}>
          <button className="CTA">{text}</button>
        </a>
      ) : (
      
        <a href={link}>
          <button className="CTA">{text}</button>
        </a>
      )}
    </>
  );
};

export default CTA;