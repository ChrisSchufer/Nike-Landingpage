import { star } from '../assets/icons';

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={imgURL}
        alt={customerName}
        width={70}
        height={70}
        className="rounded-full"
      />
      <p className="info-text max-w-sm mt-6 text-center">{feedback}</p>
      <div className="flex gap-2 mt-2">
        <img
          className="object-contain m-0"
          src={star}
          alt="rating-icon"
          width={24}
          height={24}
        />
        <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
      </div>
      <h2 className="font-bold font-palanquin mt-1 text-center text-3xl">{customerName}</h2>
    </div>
  );
};

export default ReviewCard;
