$(document).ready(function() {
    var game = {
        user: '',
        computer: '',
        currentPlayer: '',
        moves: 1
    };

    function start() {
        $("#myModal").modal('show');
    }
    
    function setFig(id) {
        if(id === 'x') {
            game.user = '<span class="fa fa-times"></span>';
            game.computer = '<span class="fa fa-circle-o"></span>';
        } else if(id === 'o') {
            game.user = '<span class="fa fa-circle-o"></span>';
            game.computer = '<span class="fa fa-times"></span>';
        }
        firstMove();
        setCurrPl('user');
    }

    function firstMove() {
        $("#fifth").html(game.computer);
        $("#fifth").removeAttr('onClick');
    }
    
    function setCurrPl(curr) {
        game.currentPlayer = curr;
    }


});
