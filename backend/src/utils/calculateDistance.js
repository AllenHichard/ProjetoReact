function deg2rad(deg){
    return deg = (Math.PI/180);
}

module.exports = function getDistanceFromLatLonInKm(centerCoordinates, pointCoordinates){
    var radius = 6371; // Radius of the earth in km
    const {latitude: lat1, longitude: long1} = centerCoordinates;
    const {latitude: lat2, longitude: long2} = pointCoordinates;
    
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 

    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var center = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var distance = radius * center; // Distance in km
    return distance; 
}