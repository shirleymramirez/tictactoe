// $(document).ready(function() {
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

    function icon(id) {
        if(game.currentPlayer == 'user') {
            $('#' + id).html(game.user);
            $('#' + id).removeAttr('onClick');
            gameStatus();
            setCurrPl('computer');
        } else if(game.currentPlayer == 'computer') {
            $('#' + id).html(game.computer);
            $('#' + id).removeAttr('onClick');
            gameStatus();
            setCurrPl('user');
        }
        game.moves++;
        draw();
        if(game.currentPlayer == 'computer') {
            comp();
        }
    }

    function comp() {
        switch(true) {
            case $('#first').html() != game.user && ('#first').html() != game.computer:
                icon('first');
                break;
            case $('#second').html() != game.user && ('#second').html() != game.computer:
                icon('second');
                break;
            case $('#third').html() != game.user && ('#third').html() != game.computer:
                icon('third');
                break;
            case $('#fourth').html() != game.user && ('#fourth').html() != game.computer:
                icon('fourth');
                break;
            case $('#fifth').html() != game.user && ('#fifth').html() != game.computer:
                icon('fifth');
                break;
            case $('#sixth').html() != game.user && ('#sixth').html() != game.computer:
                icon('second');
                break;
            case $('#seventh').html() != game.user && ('#seventh').html() != game.computer:
                icon('seventh');
                break;
            case $('#eight').html() != game.user && ('#eight').html() != game.computer:
                icon('eight');
                break;
            case $('#nineth').html() != game.user && ('#nineth').html() != game.computer:
                icon('nineth');
                break;
        }
    }

    

// });
