import ModalImage from 'react-modal-image'; // had shortage of time so using this for modal

const ModalImageComponent = props => {
  const { smallImageUrl, largeImageUrl, textToDisplay } = props;
  return (
    <ModalImage
      className={'smallImage'}
      small={smallImageUrl}
      large={largeImageUrl}
      alt={textToDisplay}
      smallSrcSet={`${smallImageUrl} 375w, ${largeImageUrl} 768w, ${largeImageUrl} 1200w`}
    />
  );
};

export default ModalImageComponent;
