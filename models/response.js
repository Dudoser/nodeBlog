module.exports = {
    success(request, data) {
        return {
            'request' : request,
            'result' : 0,
            'data' : data
        };
    },
    error(request, result, description) {
        let description_data = {};
        if (typeof(description) === 'object' && description.length > 0) {
            description_data = description;
        } else {
            description_data.message = (description ? description : 'Error data');
        }
        return {
            'request' : request,
            'result' : (result ? result : 10),
            'description' : description_data
        };
    }
};