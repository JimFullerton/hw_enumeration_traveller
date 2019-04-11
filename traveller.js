const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
});
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
});
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   // code - daisychain enumerations
//   // first map out transport
//   // then filter on is current index > indexOf
//   return this.journeys.filter((journey, index, array) => {
//     return array.indexOf(journey) === index;
//   });
// };

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map(function(journey){
    return journey.transport;
  }) // ['train', 'train', 'aeroplane', 'car', 'ferry']
    .filter((transport, index, arr) => {
      return arr.indexOf(transport) === index;
      //true ['train'] index = 0, first instance of train index = 0
      //false ['train'] index = 1, first instance of train index = 0
      //true ['train', 'aeroplane'] index = 2, first instance of aeroplane index = 2
      //true ['train', 'aeroplane', 'car'] index = 3, first instance of aeroplane index = 3
      //true ['train', 'aeroplane', 'car', 'ferry'] index = 4, first instance of ferry index = 4
    })
};


module.exports = Traveller;
