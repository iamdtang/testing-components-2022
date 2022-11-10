export default function Rating(props) {
  const ratingItems = [];

  for (let i = 1; i <= props.total; i++) {
    ratingItems.push(
      <RatingItem
        itemRatingNumber={i}
        rating={props.rating}
        key={i}
        renderRatingItem={props.children}
      />
    );
  }

  return <>{ratingItems}</>;
}

function RatingItem(props) {
  const isFilled = props.itemRatingNumber <= props.rating;

  return props.renderRatingItem(isFilled, props.itemRatingNumber);
}
