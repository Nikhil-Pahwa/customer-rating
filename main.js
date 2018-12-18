var rating = {
  Ratings: {
    averageRating: 4.1,
    totalRatings: 452,
    Ratings: [10, 4, 10, 25, 51]
  }
};

var averageRating = document.getElementById('average-rating');
var totalRating = document.getElementById('total-rating');
var ratingBars = document.getElementById('rating-bars');
var ratingList = rating.Ratings.Ratings;

var totalRatingValue = rating.Ratings.totalRatings;
var sumRating = rating.Ratings.Ratings.reduce(function(sum, item) {
  return sum + item;
}, 0);
averageRating.innerHTML = rating.Ratings.averageRating;
totalRating.innerHTML = totalRatingValue;

function createRatingBars() {
  var liElem;
  var progress;
  var progressWrapper;
  ratingList.forEach(function(value, index) {
    liElem = document.createElement('li');
    progressWrapper = document.createElement('div');
    progressWrapper.classList.add('progress-wrapper');
    progress = document.createElement('span');
    progress.classList.add('progress');
    progressWrapper.appendChild(progress);
    var calcValue = calculateRatingValues(sumRating, value);
    progress.style.width = calcValue;
    liElem.appendChild(progressWrapper);
    ratingBars.appendChild(liElem);
    progressCount = document.createElement('span');
    progressCount.classList.add('counter');
    progressCount.innerHTML = calcValue;
    liElem.appendChild(progressCount);
  });
}

function calculateRatingValues(totalValue, currentValue) {
  return (currentValue / totalValue) * 100 + '%';
}
createRatingBars();
