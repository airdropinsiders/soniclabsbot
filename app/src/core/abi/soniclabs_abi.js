  export const ABI1 = [{
    'inputs': [{
      'internalType': "contract RoleStore",
      'name': "_roleStore",
      'type': 'address'
    }],
    'stateMutability': "nonpayable",
    'type': "constructor"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "msgSender",
      'type': 'address'
    }, {
      'internalType': "string",
      'name': "role",
      'type': "string"
    }],
    'name': "Unauthorized",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "_player",
      'type': 'address'
    }, {
      'internalType': "uint256",
      'name': "_gameIndex",
      'type': "uint256"
    }, {
      'internalType': 'uint256',
      'name': "_betAmount",
      'type': 'uint256'
    }, {
      'internalType': "uint256",
      'name': '_chipAmount',
      'type': 'uint256'
    }],
    'name': '_initHand',
    'outputs': [{
      'internalType': 'uint32',
      'name': '',
      'type': 'uint32'
    }],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': '',
      'type': 'address'
    }],
    'name': 'activePlayerMapping',
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "player",
      'type': 'address'
    }, {
      'internalType': "uint256",
      'name': 'index',
      'type': "uint256"
    }],
    'name': 'addActiveHandsInGame',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "player",
      'type': 'address'
    }, {
      'internalType': "uint256",
      'name': "index",
      'type': "uint256"
    }, {
      'internalType': 'uint32',
      'name': 'handIndex_',
      'type': 'uint32'
    }],
    'name': 'addHandIndexesGame',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }],
    'name': 'cards',
    'outputs': [{
      'internalType': "uint8",
      'name': 'amountCards',
      'type': 'uint8'
    }, {
      'internalType': 'uint8',
      'name': "totalCount",
      'type': 'uint8'
    }, {
      'internalType': 'bool',
      'name': 'isSoftHand',
      'type': 'bool'
    }, {
      'internalType': 'bool',
      'name': "canSplit",
      'type': 'bool'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }, {
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }],
    'name': 'drawnCards',
    'outputs': [{
      'internalType': 'uint8',
      'name': '',
      'type': "uint8"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': "gameIndex",
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'name': "gameResults",
    'outputs': [{
      'internalType': "uint128",
      'name': 'payback',
      'type': 'uint128'
    }, {
      'internalType': 'uint128',
      'name': "payout",
      'type': 'uint128'
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': '',
      'type': "address"
    }],
    'name': "games",
    'outputs': [{
      'internalType': "uint128",
      'name': 'wagerAmount',
      'type': "uint128"
    }, {
      'internalType': "uint64",
      'name': 'activeHandIndex',
      'type': "uint64"
    }, {
      'internalType': 'uint32',
      'name': 'amountHands',
      'type': 'uint32'
    }, {
      'internalType': "bool",
      'name': 'canInsure',
      'type': "bool"
    }, {
      'internalType': 'bool',
      'name': 'awaitingRandomness',
      'type': "bool"
    }, {
      'internalType': "enum IBlackJack.GameStatus",
      'name': 'status',
      'type': 'uint8'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'player',
      'type': "address"
    }],
    'name': "getActiveHandsInGame",
    'outputs': [{
      'internalType': 'bool[5]',
      'name': '',
      'type': "bool[5]"
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "player",
      'type': 'address'
    }],
    'name': 'getActivePlayerMapping',
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '_handIndex',
      'type': "uint256"
    }],
    'name': 'getCards',
    'outputs': [{
      'components': [{
        'internalType': "uint8[8]",
        'name': "cards",
        'type': 'uint8[8]'
      }, {
        'internalType': "uint8",
        'name': "amountCards",
        'type': 'uint8'
      }, {
        'internalType': 'uint8',
        'name': "totalCount",
        'type': 'uint8'
      }, {
        'internalType': 'bool',
        'name': 'isSoftHand',
        'type': 'bool'
      }, {
        'internalType': 'bool',
        'name': "canSplit",
        'type': 'bool'
      }],
      'internalType': "struct IBlackJack.Cards",
      'name': '',
      'type': "tuple"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'player',
      'type': 'address'
    }],
    'name': "getDealerHand",
    'outputs': [{
      'components': [{
        'components': [{
          'internalType': 'address',
          'name': 'player',
          'type': "address"
        }, {
          'internalType': 'uint96',
          'name': "gameIndex",
          'type': 'uint96'
        }, {
          'internalType': 'uint16',
          'name': "chipsAmount",
          'type': 'uint16'
        }, {
          'internalType': 'uint96',
          'name': 'betAmount',
          'type': "uint96"
        }, {
          'internalType': "enum IBlackJack.HandStatus",
          'name': "status",
          'type': 'uint8'
        }, {
          'internalType': "bool",
          'name': 'isInsured',
          'type': 'bool'
        }, {
          'internalType': "bool",
          'name': 'isDouble',
          'type': "bool"
        }],
        'internalType': "struct IBlackJack.Hand",
        'name': 'hand',
        'type': "tuple"
      }, {
        'components': [{
          'internalType': 'uint8[8]',
          'name': 'cards',
          'type': 'uint8[8]'
        }, {
          'internalType': "uint8",
          'name': "amountCards",
          'type': "uint8"
        }, {
          'internalType': 'uint8',
          'name': "totalCount",
          'type': 'uint8'
        }, {
          'internalType': "bool",
          'name': 'isSoftHand',
          'type': "bool"
        }, {
          'internalType': 'bool',
          'name': "canSplit",
          'type': "bool"
        }],
        'internalType': "struct IBlackJack.Cards",
        'name': "cards",
        'type': 'tuple'
      }, {
        'internalType': 'uint256',
        'name': "splitHandIndex",
        'type': "uint256"
      }, {
        'internalType': 'uint256',
        'name': 'handIndex',
        'type': 'uint256'
      }],
      'internalType': "struct IBlackJackStore.HandData",
      'name': "dealerCards",
      'type': "tuple"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '_handIndex',
      'type': "uint256"
    }],
    'name': 'getDrawnCards',
    'outputs': [{
      'internalType': "uint8[13]",
      'name': '',
      'type': "uint8[13]"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'player',
      'type': 'address'
    }],
    'name': "getDrawnCardsOfPlayerGame",
    'outputs': [{
      'internalType': 'uint8[13]',
      'name': '',
      'type': 'uint8[13]'
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "player",
      'type': 'address'
    }],
    'name': "getGame",
    'outputs': [{
      'components': [{
        'internalType': "uint128",
        'name': "wagerAmount",
        'type': 'uint128'
      }, {
        'internalType': "uint64",
        'name': "activeHandIndex",
        'type': "uint64"
      }, {
        'internalType': 'uint32',
        'name': 'amountHands',
        'type': 'uint32'
      }, {
        'internalType': 'bool',
        'name': "canInsure",
        'type': 'bool'
      }, {
        'internalType': "bool",
        'name': "awaitingRandomness",
        'type': 'bool'
      }, {
        'internalType': "enum IBlackJack.GameStatus",
        'name': 'status',
        'type': "uint8"
      }],
      'internalType': "struct IBlackJack.Game",
      'name': '',
      'type': "tuple"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'getGameIndex',
    'outputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': "gameId",
      'type': 'uint256'
    }],
    'name': "getGameResult",
    'outputs': [{
      'components': [{
        'internalType': "enum IBlackJack.HandResult[5]",
        'name': 'hands',
        'type': "uint8[5]"
      }, {
        'internalType': 'uint128',
        'name': 'payback',
        'type': 'uint128'
      }, {
        'internalType': "uint128",
        'name': "payout",
        'type': "uint128"
      }],
      'internalType': "struct GameResultUtilsBJ.Params",
      'name': '',
      'type': "tuple"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': "_handIndex",
      'type': 'uint256'
    }],
    'name': "getHand",
    'outputs': [{
      'components': [{
        'internalType': "address",
        'name': "player",
        'type': 'address'
      }, {
        'internalType': 'uint96',
        'name': 'gameIndex',
        'type': 'uint96'
      }, {
        'internalType': "uint16",
        'name': 'chipsAmount',
        'type': 'uint16'
      }, {
        'internalType': 'uint96',
        'name': "betAmount",
        'type': "uint96"
      }, {
        'internalType': "enum IBlackJack.HandStatus",
        'name': 'status',
        'type': "uint8"
      }, {
        'internalType': "bool",
        'name': "isInsured",
        'type': "bool"
      }, {
        'internalType': "bool",
        'name': "isDouble",
        'type': 'bool'
      }],
      'internalType': "struct IBlackJack.Hand",
      'name': '',
      'type': "tuple"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': "getHandIndex",
    'outputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'player',
      'type': "address"
    }],
    'name': "getHandIndexesGame",
    'outputs': [{
      'internalType': "uint32[5]",
      'name': '',
      'type': "uint32[5]"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "player",
      'type': 'address'
    }],
    'name': 'getPlayerStatus',
    'outputs': [{
      'components': [{
        'components': [{
          'internalType': "uint128",
          'name': 'wagerAmount',
          'type': 'uint128'
        }, {
          'internalType': 'uint64',
          'name': 'activeHandIndex',
          'type': 'uint64'
        }, {
          'internalType': 'uint32',
          'name': 'amountHands',
          'type': 'uint32'
        }, {
          'internalType': "bool",
          'name': 'canInsure',
          'type': 'bool'
        }, {
          'internalType': "bool",
          'name': 'awaitingRandomness',
          'type': "bool"
        }, {
          'internalType': "enum IBlackJack.GameStatus",
          'name': "status",
          'type': "uint8"
        }],
        'internalType': "struct IBlackJack.Game",
        'name': 'game',
        'type': 'tuple'
      }, {
        'components': [{
          'components': [{
            'internalType': 'address',
            'name': "player",
            'type': 'address'
          }, {
            'internalType': "uint96",
            'name': "gameIndex",
            'type': "uint96"
          }, {
            'internalType': 'uint16',
            'name': 'chipsAmount',
            'type': 'uint16'
          }, {
            'internalType': "uint96",
            'name': "betAmount",
            'type': 'uint96'
          }, {
            'internalType': "enum IBlackJack.HandStatus",
            'name': "status",
            'type': "uint8"
          }, {
            'internalType': "bool",
            'name': "isInsured",
            'type': "bool"
          }, {
            'internalType': "bool",
            'name': "isDouble",
            'type': 'bool'
          }],
          'internalType': "struct IBlackJack.Hand",
          'name': "hand",
          'type': 'tuple'
        }, {
          'components': [{
            'internalType': "uint8[8]",
            'name': "cards",
            'type': "uint8[8]"
          }, {
            'internalType': "uint8",
            'name': 'amountCards',
            'type': "uint8"
          }, {
            'internalType': "uint8",
            'name': 'totalCount',
            'type': 'uint8'
          }, {
            'internalType': "bool",
            'name': "isSoftHand",
            'type': 'bool'
          }, {
            'internalType': 'bool',
            'name': 'canSplit',
            'type': 'bool'
          }],
          'internalType': "struct IBlackJack.Cards",
          'name': 'cards',
          'type': "tuple"
        }, {
          'internalType': "uint256",
          'name': 'splitHandIndex',
          'type': "uint256"
        }, {
          'internalType': 'uint256',
          'name': 'handIndex',
          'type': 'uint256'
        }],
        'internalType': "struct IBlackJackStore.HandData[]",
        'name': 'hands',
        'type': 'tuple[]'
      }],
      'internalType': "struct IBlackJackStore.GameData",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': "_handIndex",
      'type': "uint256"
    }],
    'name': 'getSplitCouple',
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'handIndex',
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': '',
      'type': "address"
    }, {
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }],
    'name': "handIndexesGame",
    'outputs': [{
      'internalType': 'uint32',
      'name': '',
      'type': 'uint32'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'name': 'hands',
    'outputs': [{
      'internalType': 'address',
      'name': "player",
      'type': "address"
    }, {
      'internalType': 'uint96',
      'name': "gameIndex",
      'type': 'uint96'
    }, {
      'internalType': 'uint16',
      'name': "chipsAmount",
      'type': 'uint16'
    }, {
      'internalType': 'uint96',
      'name': "betAmount",
      'type': "uint96"
    }, {
      'internalType': "enum IBlackJack.HandStatus",
      'name': 'status',
      'type': 'uint8'
    }, {
      'internalType': 'bool',
      'name': 'isInsured',
      'type': "bool"
    }, {
      'internalType': 'bool',
      'name': "isDouble",
      'type': 'bool'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [],
    'name': 'increaseGameIndex',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'increaseHandIndex',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '_handIndex',
      'type': 'uint256'
    }],
    'name': 'returnHand',
    'outputs': [{
      'components': [{
        'internalType': 'address',
        'name': 'player',
        'type': "address"
      }, {
        'internalType': "uint96",
        'name': "gameIndex",
        'type': "uint96"
      }, {
        'internalType': 'uint16',
        'name': "chipsAmount",
        'type': 'uint16'
      }, {
        'internalType': "uint96",
        'name': "betAmount",
        'type': 'uint96'
      }, {
        'internalType': "enum IBlackJack.HandStatus",
        'name': 'status',
        'type': 'uint8'
      }, {
        'internalType': "bool",
        'name': 'isInsured',
        'type': "bool"
      }, {
        'internalType': 'bool',
        'name': "isDouble",
        'type': 'bool'
      }],
      'internalType': "struct IBlackJack.Hand",
      'name': '',
      'type': "tuple"
    }, {
      'components': [{
        'internalType': "uint8[8]",
        'name': 'cards',
        'type': "uint8[8]"
      }, {
        'internalType': "uint8",
        'name': "amountCards",
        'type': 'uint8'
      }, {
        'internalType': 'uint8',
        'name': "totalCount",
        'type': "uint8"
      }, {
        'internalType': "bool",
        'name': "isSoftHand",
        'type': "bool"
      }, {
        'internalType': "bool",
        'name': "canSplit",
        'type': 'bool'
      }],
      'internalType': "struct IBlackJack.Cards",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "_player",
      'type': 'address'
    }],
    'name': "returnHandIndexesInGame",
    'outputs': [{
      'internalType': "uint32[5]",
      'name': '',
      'type': "uint32[5]"
    }, {
      'internalType': 'bool[5]',
      'name': '',
      'type': "bool[5]"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': "_handIndex",
      'type': "uint256"
    }],
    'name': "returnSplitCouple",
    'outputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'roleStore',
    'outputs': [{
      'internalType': "contract RoleStore",
      'name': '',
      'type': 'address'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'player',
      'type': 'address'
    }, {
      'internalType': "bool[5]",
      'name': "activeHands",
      'type': "bool[5]"
    }],
    'name': 'setActiveHandsInGame',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'player',
      'type': "address"
    }, {
      'internalType': 'uint256',
      'name': 'index',
      'type': 'uint256'
    }],
    'name': "setActivePlayerMapping",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '_handIndex',
      'type': "uint256"
    }, {
      'components': [{
        'internalType': 'uint8[8]',
        'name': 'cards',
        'type': 'uint8[8]'
      }, {
        'internalType': 'uint8',
        'name': 'amountCards',
        'type': 'uint8'
      }, {
        'internalType': "uint8",
        'name': 'totalCount',
        'type': "uint8"
      }, {
        'internalType': "bool",
        'name': "isSoftHand",
        'type': "bool"
      }, {
        'internalType': 'bool',
        'name': "canSplit",
        'type': 'bool'
      }],
      'internalType': "struct IBlackJack.Cards",
      'name': "handCards",
      'type': 'tuple'
    }],
    'name': "setCards",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '_handIndex',
      'type': 'uint256'
    }, {
      'internalType': "uint8[13]",
      'name': 'drawCards',
      'type': 'uint8[13]'
    }],
    'name': 'setDrawnCards',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "player",
      'type': 'address'
    }, {
      'components': [{
        'internalType': 'uint128',
        'name': "wagerAmount",
        'type': "uint128"
      }, {
        'internalType': "uint64",
        'name': "activeHandIndex",
        'type': "uint64"
      }, {
        'internalType': 'uint32',
        'name': 'amountHands',
        'type': "uint32"
      }, {
        'internalType': 'bool',
        'name': "canInsure",
        'type': "bool"
      }, {
        'internalType': "bool",
        'name': "awaitingRandomness",
        'type': 'bool'
      }, {
        'internalType': "enum IBlackJack.GameStatus",
        'name': "status",
        'type': "uint8"
      }],
      'internalType': "struct IBlackJack.Game",
      'name': "game",
      'type': "tuple"
    }],
    'name': 'setGame',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': "gameId",
      'type': 'uint256'
    }, {
      'components': [{
        'internalType': "enum IBlackJack.HandResult[5]",
        'name': 'hands',
        'type': 'uint8[5]'
      }, {
        'internalType': "uint128",
        'name': 'payback',
        'type': "uint128"
      }, {
        'internalType': "uint128",
        'name': 'payout',
        'type': 'uint128'
      }],
      'internalType': "struct GameResultUtilsBJ.Params",
      'name': "result",
      'type': "tuple"
    }],
    'name': 'setGameResult',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '_handIndex',
      'type': 'uint256'
    }, {
      'components': [{
        'internalType': 'address',
        'name': 'player',
        'type': "address"
      }, {
        'internalType': "uint96",
        'name': 'gameIndex',
        'type': 'uint96'
      }, {
        'internalType': "uint16",
        'name': 'chipsAmount',
        'type': 'uint16'
      }, {
        'internalType': "uint96",
        'name': 'betAmount',
        'type': 'uint96'
      }, {
        'internalType': "enum IBlackJack.HandStatus",
        'name': 'status',
        'type': 'uint8'
      }, {
        'internalType': "bool",
        'name': 'isInsured',
        'type': 'bool'
      }, {
        'internalType': 'bool',
        'name': 'isDouble',
        'type': "bool"
      }],
      'internalType': "struct IBlackJack.Hand",
      'name': 'hand',
      'type': 'tuple'
    }],
    'name': 'setHand',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "player",
      'type': "address"
    }, {
      'internalType': 'uint32[5]',
      'name': 'indexes',
      'type': "uint32[5]"
    }],
    'name': "setHandIndexesGame",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '_handIndex',
      'type': "uint256"
    }, {
      'internalType': "uint256",
      'name': "newHandIndex",
      'type': "uint256"
    }],
    'name': 'setSplitCouple',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }],
    'name': 'splitCouple',
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': "view",
    'type': "function"
  }];
  export const ABI2 = [{
    'inputs': [{
      'internalType': "contract RoleStore",
      'name': "_roleStore",
      'type': 'address'
    }, {
      'internalType': "contract ICashier",
      'name': '_cashier',
      'type': "address"
    }, {
      'internalType': "contract IVaultAdapter",
      'name': '_vaultAdapter',
      'type': 'address'
    }, {
      'internalType': "contract IEventEmitter",
      'name': 'eventEmitterInstance',
      'type': 'address'
    }, {
      'internalType': "contract IRandomizerRouter",
      'name': "routerInstance",
      'type': "address"
    }, {
      'internalType': "contract PriceFeed",
      'name': "_priceFeed",
      'type': "address"
    }],
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  }, {
    'inputs': [{
      'internalType': "bytes",
      'name': 'data',
      'type': 'bytes'
    }],
    'name': "CallRevert",
    'type': "error"
  }, {
    'inputs': [{
      'internalType': 'string',
      'name': 'name',
      'type': "string"
    }],
    'name': "CannotBeZero",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "uint128",
      'name': "escrow",
      'type': 'uint128'
    }, {
      'internalType': 'uint128',
      'name': "wanted",
      'type': 'uint128'
    }],
    'name': 'InsufficientEscrow',
    'type': "error"
  }, {
    'inputs': [{
      'internalType': "string",
      'name': 'name',
      'type': "string"
    }],
    'name': "MustBeGreater",
    'type': "error"
  }, {
    'inputs': [{
      'internalType': 'bytes32',
      'name': "key",
      'type': "bytes32"
    }],
    'name': "ProgramDidNotRefund",
    'type': 'error'
  }, {
    'inputs': [],
    'name': "ReentrancyGuardReentrantCall",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': "requestId",
      'type': 'uint256'
    }],
    'name': 'RequestCouldNotFind',
    'type': "error"
  }, {
    'inputs': [{
      'internalType': "uint8",
      'name': 'bits',
      'type': 'uint8'
    }, {
      'internalType': "uint256",
      'name': 'value',
      'type': 'uint256'
    }],
    'name': "SafeCastOverflowedUintDowncast",
    'type': "error"
  }, {
    'inputs': [{
      'internalType': 'bytes32',
      'name': 'key',
      'type': 'bytes32'
    }],
    'name': 'SessionNotIterable',
    'type': "error"
  }, {
    'inputs': [{
      'internalType': "bytes32",
      'name': 'key',
      'type': "bytes32"
    }],
    'name': 'SessionNotRefundable',
    'type': "error"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'player',
      'type': 'address'
    }],
    'name': "SessionWaitingIteration",
    'type': "error"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'msgSender',
      'type': "address"
    }, {
      'internalType': 'string',
      'name': "role",
      'type': "string"
    }],
    'name': "Unauthorized",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'name': 'beginTargets',
    'outputs': [{
      'internalType': "contract IOnBegin",
      'name': '',
      'type': 'address'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'cashier',
    'outputs': [{
      'internalType': "contract ICashier",
      'name': '',
      'type': "address"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "contract IRandomizerRouter",
      'name': "_randomizerRouter",
      'type': 'address'
    }],
    'name': "changeRandomizerRouter",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "program",
      'type': "address"
    }, {
      'internalType': "address",
      'name': 'client',
      'type': "address"
    }],
    'name': "emergencyRefund",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'eventEmitter',
    'outputs': [{
      'internalType': "contract IEventEmitter",
      'name': '',
      'type': "address"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "program",
      'type': 'address'
    }, {
      'internalType': "address",
      'name': 'client',
      'type': 'address'
    }],
    'name': 'getSessionByClient',
    'outputs': [{
      'internalType': 'bytes32',
      'name': '',
      'type': 'bytes32'
    }, {
      'components': [{
        'components': [{
          'internalType': "address",
          'name': 'operator',
          'type': "address"
        }, {
          'internalType': 'uint128',
          'name': 'lastRequestId',
          'type': 'uint128'
        }, {
          'internalType': "uint64",
          'name': "startBlock",
          'type': "uint64"
        }, {
          'internalType': "uint64",
          'name': "endBlock",
          'type': 'uint64'
        }, {
          'internalType': 'uint64',
          'name': "lastSeen",
          'type': 'uint64'
        }],
        'internalType': "struct Session.Detail",
        'name': "detail",
        'type': 'tuple'
      }, {
        'components': [{
          'internalType': 'uint8',
          'name': 'decimals',
          'type': "uint8"
        }, {
          'internalType': "uint8",
          'name': 'tokenDecimals',
          'type': 'uint8'
        }, {
          'internalType': 'uint64',
          'name': "value",
          'type': 'uint64'
        }],
        'internalType': "struct Price.Props",
        'name': 'price',
        'type': "tuple"
      }, {
        'internalType': "enum Session.Status",
        'name': "status",
        'type': "uint8"
      }, {
        'internalType': 'address',
        'name': "token",
        'type': "address"
      }, {
        'internalType': 'address',
        'name': "program",
        'type': 'address'
      }, {
        'internalType': "address",
        'name': 'client',
        'type': "address"
      }, {
        'internalType': 'uint128',
        'name': "escrow",
        'type': "uint128"
      }, {
        'internalType': "uint128",
        'name': "payout",
        'type': "uint128"
      }, {
        'internalType': 'address',
        'name': "bankroll",
        'type': 'address'
      }],
      'internalType': "struct Session.Props",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': 'requestId',
      'type': 'uint256'
    }],
    'name': 'getSessionByRequestId',
    'outputs': [{
      'internalType': 'bytes32',
      'name': '',
      'type': "bytes32"
    }, {
      'components': [{
        'components': [{
          'internalType': 'address',
          'name': 'operator',
          'type': "address"
        }, {
          'internalType': 'uint128',
          'name': "lastRequestId",
          'type': "uint128"
        }, {
          'internalType': "uint64",
          'name': "startBlock",
          'type': 'uint64'
        }, {
          'internalType': 'uint64',
          'name': "endBlock",
          'type': 'uint64'
        }, {
          'internalType': "uint64",
          'name': "lastSeen",
          'type': 'uint64'
        }],
        'internalType': "struct Session.Detail",
        'name': "detail",
        'type': "tuple"
      }, {
        'components': [{
          'internalType': 'uint8',
          'name': "decimals",
          'type': "uint8"
        }, {
          'internalType': "uint8",
          'name': 'tokenDecimals',
          'type': "uint8"
        }, {
          'internalType': 'uint64',
          'name': 'value',
          'type': "uint64"
        }],
        'internalType': "struct Price.Props",
        'name': "price",
        'type': "tuple"
      }, {
        'internalType': "enum Session.Status",
        'name': 'status',
        'type': 'uint8'
      }, {
        'internalType': "address",
        'name': "token",
        'type': "address"
      }, {
        'internalType': "address",
        'name': 'program',
        'type': "address"
      }, {
        'internalType': "address",
        'name': "client",
        'type': "address"
      }, {
        'internalType': "uint128",
        'name': "escrow",
        'type': 'uint128'
      }, {
        'internalType': 'uint128',
        'name': "payout",
        'type': 'uint128'
      }, {
        'internalType': "address",
        'name': "bankroll",
        'type': "address"
      }],
      'internalType': "struct Session.Props",
      'name': '',
      'type': "tuple"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': 'index',
      'type': "uint256"
    }],
    'name': "offBegin",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': 'index',
      'type': "uint256"
    }],
    'name': "offSettlement",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': "index",
      'type': "uint256"
    }, {
      'internalType': "contract IOnBegin",
      'name': "target",
      'type': 'address'
    }],
    'name': 'onBegin',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': "index",
      'type': 'uint256'
    }, {
      'internalType': "contract IOnSettlement",
      'name': "target",
      'type': "address"
    }],
    'name': 'onSettlement',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "contract IProgram",
      'name': "program",
      'type': 'address'
    }, {
      'internalType': "address",
      'name': 'bankroll',
      'type': "address"
    }, {
      'internalType': "address",
      'name': "operator",
      'type': "address"
    }, {
      'internalType': "string",
      'name': "route",
      'type': "string"
    }, {
      'internalType': 'bytes',
      'name': 'data',
      'type': 'bytes'
    }],
    'name': "perform",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'priceFeed',
    'outputs': [{
      'internalType': "contract PriceFeed",
      'name': '',
      'type': "address"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': 'requestId',
      'type': 'uint256'
    }, {
      'internalType': 'uint256[]',
      'name': 'randoms',
      'type': "uint256[]"
    }],
    'name': 'randomizerCallback',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'randomizerRouter',
    'outputs': [{
      'internalType': "contract IRandomizerRouter",
      'name': '',
      'type': 'address'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'program',
      'type': 'address'
    }, {
      'internalType': "address",
      'name': "client",
      'type': "address"
    }],
    'name': "reIterate",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'reIterationCooldown',
    'outputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'program',
      'type': "address"
    }, {
      'internalType': "address",
      'name': 'client',
      'type': "address"
    }],
    'name': "refund",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [],
    'name': 'refundCooldown',
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }],
    'name': 'requestCache',
    'outputs': [{
      'internalType': 'bytes32',
      'name': '',
      'type': 'bytes32'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [],
    'name': "roleStore",
    'outputs': [{
      'internalType': "contract RoleStore",
      'name': '',
      'type': "address"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'bytes32',
      'name': '',
      'type': 'bytes32'
    }],
    'name': 'sessions',
    'outputs': [{
      'components': [{
        'internalType': "address",
        'name': 'operator',
        'type': "address"
      }, {
        'internalType': "uint128",
        'name': "lastRequestId",
        'type': "uint128"
      }, {
        'internalType': 'uint64',
        'name': 'startBlock',
        'type': "uint64"
      }, {
        'internalType': "uint64",
        'name': 'endBlock',
        'type': "uint64"
      }, {
        'internalType': 'uint64',
        'name': 'lastSeen',
        'type': "uint64"
      }],
      'internalType': "struct Session.Detail",
      'name': 'detail',
      'type': 'tuple'
    }, {
      'components': [{
        'internalType': 'uint8',
        'name': "decimals",
        'type': 'uint8'
      }, {
        'internalType': "uint8",
        'name': "tokenDecimals",
        'type': 'uint8'
      }, {
        'internalType': "uint64",
        'name': "value",
        'type': "uint64"
      }],
      'internalType': "struct Price.Props",
      'name': "price",
      'type': "tuple"
    }, {
      'internalType': "enum Session.Status",
      'name': "status",
      'type': "uint8"
    }, {
      'internalType': 'address',
      'name': 'token',
      'type': 'address'
    }, {
      'internalType': 'address',
      'name': 'program',
      'type': "address"
    }, {
      'internalType': 'address',
      'name': "client",
      'type': 'address'
    }, {
      'internalType': 'uint128',
      'name': 'escrow',
      'type': 'uint128'
    }, {
      'internalType': "uint128",
      'name': "payout",
      'type': 'uint128'
    }, {
      'internalType': "address",
      'name': "bankroll",
      'type': "address"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }],
    'name': 'settlementTargets',
    'outputs': [{
      'internalType': "contract IOnSettlement",
      'name': '',
      'type': 'address'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': "_refundCooldown",
      'type': 'uint256'
    }, {
      'internalType': 'uint256',
      'name': '_reIterationCooldown',
      'type': 'uint256'
    }],
    'name': "updateCooldowns",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'vaultAdapter',
    'outputs': [{
      'internalType': "contract IVaultAdapter",
      'name': '',
      'type': "address"
    }],
    'stateMutability': "view",
    'type': 'function'
  }];
  export const ABI3 = [{
    'inputs': [{
      'internalType': 'string',
      'name': 'name',
      'type': 'string'
    }, {
      'internalType': "string",
      'name': "symbol",
      'type': "string"
    }, {
      'internalType': "uint8",
      'name': "_decimals",
      'type': 'uint8'
    }],
    'stateMutability': "nonpayable",
    'type': 'constructor'
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': true,
      'internalType': "address",
      'name': 'owner',
      'type': "address"
    }, {
      'indexed': true,
      'internalType': "address",
      'name': "spender",
      'type': 'address'
    }, {
      'indexed': false,
      'internalType': 'uint256',
      'name': "value",
      'type': "uint256"
    }],
    'name': 'Approval',
    'type': "event"
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': false,
      'internalType': 'address',
      'name': 'to',
      'type': 'address'
    }, {
      'indexed': false,
      'internalType': 'uint256',
      'name': "amount",
      'type': 'uint256'
    }],
    'name': "Burn",
    'type': "event"
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': false,
      'internalType': 'address',
      'name': 'to',
      'type': 'address'
    }, {
      'indexed': false,
      'internalType': "uint256",
      'name': "amount",
      'type': 'uint256'
    }],
    'name': "Mint",
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': true,
      'internalType': 'bytes32',
      'name': "role",
      'type': "bytes32"
    }, {
      'indexed': true,
      'internalType': 'bytes32',
      'name': 'previousAdminRole',
      'type': 'bytes32'
    }, {
      'indexed': true,
      'internalType': "bytes32",
      'name': "newAdminRole",
      'type': "bytes32"
    }],
    'name': 'RoleAdminChanged',
    'type': "event"
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': true,
      'internalType': "bytes32",
      'name': "role",
      'type': "bytes32"
    }, {
      'indexed': true,
      'internalType': "address",
      'name': "account",
      'type': "address"
    }, {
      'indexed': true,
      'internalType': 'address',
      'name': "sender",
      'type': "address"
    }],
    'name': 'RoleGranted',
    'type': "event"
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': true,
      'internalType': "bytes32",
      'name': "role",
      'type': 'bytes32'
    }, {
      'indexed': true,
      'internalType': 'address',
      'name': "account",
      'type': 'address'
    }, {
      'indexed': true,
      'internalType': 'address',
      'name': 'sender',
      'type': "address"
    }],
    'name': "RoleRevoked",
    'type': "event"
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': true,
      'internalType': 'address',
      'name': "from",
      'type': "address"
    }, {
      'indexed': true,
      'internalType': 'address',
      'name': 'to',
      'type': 'address'
    }, {
      'indexed': false,
      'internalType': "uint256",
      'name': "value",
      'type': "uint256"
    }],
    'name': "Transfer",
    'type': 'event'
  }, {
    'inputs': [],
    'name': 'DEFAULT_ADMIN_ROLE',
    'outputs': [{
      'internalType': 'bytes32',
      'name': '',
      'type': 'bytes32'
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "owner",
      'type': "address"
    }, {
      'internalType': "address",
      'name': 'spender',
      'type': 'address'
    }],
    'name': "allowance",
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'spender',
      'type': 'address'
    }, {
      'internalType': 'uint256',
      'name': 'amount',
      'type': 'uint256'
    }],
    'name': 'approve',
    'outputs': [{
      'internalType': "bool",
      'name': '',
      'type': "bool"
    }],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'account',
      'type': "address"
    }],
    'name': "balanceOf",
    'outputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': '_account',
      'type': "address"
    }, {
      'internalType': 'uint256',
      'name': "_amount",
      'type': "uint256"
    }],
    'name': 'burn',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [],
    'name': 'decimals',
    'outputs': [{
      'internalType': "uint8",
      'name': '',
      'type': "uint8"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'decimalsSet',
    'outputs': [{
      'internalType': 'uint8',
      'name': '',
      'type': 'uint8'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'spender',
      'type': 'address'
    }, {
      'internalType': "uint256",
      'name': "subtractedValue",
      'type': 'uint256'
    }],
    'name': "decreaseAllowance",
    'outputs': [{
      'internalType': "bool",
      'name': '',
      'type': 'bool'
    }],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': '_account',
      'type': "address"
    }],
    'name': 'faucet',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [],
    'name': "faucetMintAmount",
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': "faucetPaused",
    'outputs': [{
      'internalType': 'bool',
      'name': '',
      'type': "bool"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'bytes32',
      'name': "role",
      'type': "bytes32"
    }],
    'name': "getRoleAdmin",
    'outputs': [{
      'internalType': 'bytes32',
      'name': '',
      'type': "bytes32"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'bytes32',
      'name': 'role',
      'type': 'bytes32'
    }, {
      'internalType': 'address',
      'name': "account",
      'type': 'address'
    }],
    'name': 'grantRole',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "bytes32",
      'name': "role",
      'type': "bytes32"
    }, {
      'internalType': 'address',
      'name': "account",
      'type': "address"
    }],
    'name': "hasRole",
    'outputs': [{
      'internalType': 'bool',
      'name': '',
      'type': 'bool'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'spender',
      'type': 'address'
    }, {
      'internalType': "uint256",
      'name': "addedValue",
      'type': 'uint256'
    }],
    'name': "increaseAllowance",
    'outputs': [{
      'internalType': "bool",
      'name': '',
      'type': "bool"
    }],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'isFaucet',
    'outputs': [{
      'internalType': 'bool',
      'name': '',
      'type': "bool"
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'maxBalanceAmount',
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': '_account',
      'type': "address"
    }, {
      'internalType': "uint256",
      'name': '_amount',
      'type': "uint256"
    }],
    'name': "mint",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [],
    'name': 'name',
    'outputs': [{
      'internalType': "string",
      'name': '',
      'type': "string"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "bytes32",
      'name': "role",
      'type': 'bytes32'
    }, {
      'internalType': "address",
      'name': 'account',
      'type': "address"
    }],
    'name': "renounceRole",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "bytes32",
      'name': 'role',
      'type': "bytes32"
    }, {
      'internalType': "address",
      'name': 'account',
      'type': "address"
    }],
    'name': "revokeRole",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [],
    'name': "setAsFaucet",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '_maxBalanceAmount',
      'type': "uint256"
    }],
    'name': "setMaxBalanceAmount",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '_faucetMintAmount',
      'type': "uint256"
    }],
    'name': "setMintAmount",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "bool",
      'name': '_setting',
      'type': 'bool'
    }],
    'name': 'setPauseStatus',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'bytes4',
      'name': "interfaceId",
      'type': "bytes4"
    }],
    'name': "supportsInterface",
    'outputs': [{
      'internalType': "bool",
      'name': '',
      'type': "bool"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [],
    'name': 'symbol',
    'outputs': [{
      'internalType': "string",
      'name': '',
      'type': "string"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'to',
      'type': "address"
    }, {
      'internalType': "uint256",
      'name': 'amount',
      'type': "uint256"
    }],
    'name': 'transfer',
    'outputs': [{
      'internalType': "bool",
      'name': '',
      'type': "bool"
    }],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'from',
      'type': "address"
    }, {
      'internalType': 'address',
      'name': 'to',
      'type': "address"
    }, {
      'internalType': "uint256",
      'name': "amount",
      'type': "uint256"
    }],
    'name': 'transferFrom',
    'outputs': [{
      'internalType': "bool",
      'name': '',
      'type': "bool"
    }],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }];
  export const ABI4 = [{
    'inputs': [{
      'internalType': "contract RoleStore",
      'name': '_roleStore',
      'type': 'address'
    }, {
      'internalType': "contract Config",
      'name': "_config",
      'type': "address"
    }, {
      'internalType': "contract BudgetMiddleware",
      'name': '_budget',
      'type': 'address'
    }],
    'stateMutability': "nonpayable",
    'type': "constructor"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': 'address'
    }],
    'name': 'AlreadyCompleted',
    'type': "error"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "client",
      'type': 'address'
    }],
    'name': 'HandResultError',
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "client",
      'type': "address"
    }],
    'name': 'HasUncompletedGame',
    'type': "error"
  }, {
    'inputs': [{
      'internalType': 'uint128',
      'name': "given",
      'type': 'uint128'
    }, {
      'internalType': 'uint128',
      'name': "max",
      'type': 'uint128'
    }],
    'name': "MaxWagerExceeded",
    'type': "error"
  }, {
    'inputs': [{
      'internalType': "uint128",
      'name': "given",
      'type': "uint128"
    }, {
      'internalType': 'uint128',
      'name': 'min',
      'type': 'uint128'
    }],
    'name': "MinWagerNotMet",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': 'address'
    }],
    'name': 'NotPlayersTurn',
    'type': "error"
  }, {
    'inputs': [],
    'name': "ReentrancyGuardReentrantCall",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "msgSender",
      'type': "address"
    }, {
      'internalType': 'string',
      'name': 'role',
      'type': 'string'
    }],
    'name': 'Unauthorized',
    'type': 'error'
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': true,
      'internalType': "uint256",
      'name': "gameIndex",
      'type': 'uint256'
    }, {
      'indexed': true,
      'internalType': 'address',
      'name': 'player',
      'type': 'address'
    }],
    'name': 'AttemptedRefund',
    'type': "event"
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': true,
      'internalType': 'uint256',
      'name': "gameIndex",
      'type': 'uint256'
    }, {
      'indexed': true,
      'internalType': "address",
      'name': "player",
      'type': 'address'
    }, {
      'indexed': false,
      'internalType': "uint256",
      'name': "anteAmount",
      'type': "uint256"
    }, {
      'indexed': false,
      'internalType': "uint256",
      'name': 'sideBetAmount',
      'type': 'uint256'
    }, {
      'indexed': false,
      'internalType': 'uint256',
      'name': "callAmount",
      'type': 'uint256'
    }],
    'name': 'RefundGame',
    'type': 'event'
  }, {
    'inputs': [],
    'name': 'REGULAR_ANTE_MULTIPLIER',
    'outputs': [{
      'internalType': 'uint128',
      'name': '',
      'type': 'uint128'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [],
    'name': "SIDEBET_MULTIPLIER",
    'outputs': [{
      'internalType': 'uint128',
      'name': '',
      'type': "uint128"
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "_client",
      'type': "address"
    }, {
      'internalType': "address",
      'name': '_bankroll',
      'type': "address"
    }, {
      'internalType': 'bytes',
      'name': '_data',
      'type': "bytes"
    }],
    'name': 'bet',
    'outputs': [{
      'components': [{
        'internalType': 'uint128',
        'name': "escrow",
        'type': 'uint128'
      }, {
        'internalType': 'uint128',
        'name': 'payback',
        'type': 'uint128'
      }, {
        'internalType': "uint128",
        'name': 'payout',
        'type': "uint128"
      }, {
        'internalType': 'uint32',
        'name': 'delay',
        'type': 'uint32'
      }, {
        'internalType': 'uint8',
        'name': 'iterate',
        'type': "uint8"
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': 'signal',
        'type': 'uint8'
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': "tuple"
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': "string",
            'name': "key",
            'type': "string"
          }, {
            'internalType': "bytes",
            'name': "value",
            'type': 'bytes'
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': "items",
          'type': 'tuple[]'
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': "list",
        'type': "tuple"
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': "tuple"
    }],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [],
    'name': "budget",
    'outputs': [{
      'internalType': "contract BudgetMiddleware",
      'name': '',
      'type': 'address'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [],
    'name': 'config',
    'outputs': [{
      'internalType': "contract Config",
      'name': '',
      'type': "address"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "_client",
      'type': "address"
    }, {
      'internalType': "address",
      'name': '',
      'type': "address"
    }, {
      'internalType': 'bytes',
      'name': "_data",
      'type': "bytes"
    }],
    'name': "decide",
    'outputs': [{
      'components': [{
        'internalType': 'uint128',
        'name': 'escrow',
        'type': "uint128"
      }, {
        'internalType': "uint128",
        'name': 'payback',
        'type': 'uint128'
      }, {
        'internalType': "uint128",
        'name': "payout",
        'type': "uint128"
      }, {
        'internalType': 'uint32',
        'name': "delay",
        'type': "uint32"
      }, {
        'internalType': "uint8",
        'name': 'iterate',
        'type': 'uint8'
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': "signal",
        'type': "uint8"
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': 'tuple'
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': "string",
            'name': "key",
            'type': 'string'
          }, {
            'internalType': 'bytes',
            'name': "value",
            'type': "bytes"
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': 'items',
          'type': "tuple[]"
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': 'list',
        'type': "tuple"
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': "tuple"
    }],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint128',
      'name': 'anteAmount_',
      'type': 'uint128'
    }, {
      'internalType': 'uint128',
      'name': "sideBetAmount_",
      'type': "uint128"
    }, {
      'internalType': "uint128",
      'name': 'chipAmount_',
      'type': "uint128"
    }],
    'name': "encodeBet",
    'outputs': [{
      'internalType': "bytes",
      'name': '',
      'type': 'bytes'
    }],
    'stateMutability': 'pure',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': '_client',
      'type': 'address'
    }, {
      'internalType': 'uint256[]',
      'name': "_randoms",
      'type': "uint256[]"
    }],
    'name': "fill",
    'outputs': [{
      'components': [{
        'internalType': "uint128",
        'name': 'escrow',
        'type': 'uint128'
      }, {
        'internalType': 'uint128',
        'name': "payback",
        'type': 'uint128'
      }, {
        'internalType': 'uint128',
        'name': "payout",
        'type': "uint128"
      }, {
        'internalType': "uint32",
        'name': "delay",
        'type': "uint32"
      }, {
        'internalType': 'uint8',
        'name': 'iterate',
        'type': "uint8"
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': "signal",
        'type': 'uint8'
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': "results_",
      'type': "tuple"
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': 'string',
            'name': 'key',
            'type': 'string'
          }, {
            'internalType': 'bytes',
            'name': "value",
            'type': 'bytes'
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': 'items',
          'type': "tuple[]"
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': 'list',
        'type': 'tuple'
      }],
      'internalType': "struct EventUtils.Log",
      'name': "log_",
      'type': 'tuple'
    }],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [],
    'name': "gameIndex",
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': '',
      'type': 'address'
    }],
    'name': 'games',
    'outputs': [{
      'internalType': "address",
      'name': "bankroll",
      'type': "address"
    }, {
      'internalType': "uint128",
      'name': 'anteAmount',
      'type': "uint128"
    }, {
      'internalType': "uint32",
      'name': 'gameIndex',
      'type': "uint32"
    }, {
      'internalType': "uint16",
      'name': "anteChipsAmount",
      'type': 'uint16'
    }, {
      'internalType': 'uint16',
      'name': "sideBetChipsAmount",
      'type': "uint16"
    }, {
      'internalType': 'uint128',
      'name': 'betAmountSideBet',
      'type': 'uint128'
    }, {
      'internalType': "uint128",
      'name': 'callBetAmount',
      'type': 'uint128'
    }, {
      'internalType': "uint128",
      'name': 'sideBetWonAmount',
      'type': "uint128"
    }, {
      'internalType': "enum IWINRPoker.State",
      'name': "state",
      'type': "uint8"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "_player",
      'type': "address"
    }],
    'name': 'getHand',
    'outputs': [{
      'internalType': 'uint16[9]',
      'name': '',
      'type': "uint16[9]"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "_player",
      'type': "address"
    }],
    'name': "getPlayerStatus",
    'outputs': [{
      'components': [{
        'internalType': 'address',
        'name': "bankroll",
        'type': 'address'
      }, {
        'internalType': "uint16",
        'name': 'anteChips',
        'type': "uint16"
      }, {
        'internalType': 'uint16',
        'name': 'sideBetChips',
        'type': "uint16"
      }, {
        'internalType': "uint16[9]",
        'name': "cards",
        'type': 'uint16[9]'
      }, {
        'internalType': 'uint128',
        'name': "wager",
        'type': 'uint128'
      }, {
        'internalType': 'uint32',
        'name': "gameIndex",
        'type': "uint32"
      }, {
        'internalType': "enum IWINRPoker.State",
        'name': 'state',
        'type': "uint8"
      }],
      'internalType': "struct IWINRPoker.PlayerStatus",
      'name': '',
      'type': "tuple"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [],
    'name': 'getType',
    'outputs': [{
      'internalType': "string",
      'name': '',
      'type': 'string'
    }],
    'stateMutability': "pure",
    'type': 'function'
  }, {
    'inputs': [],
    'name': "getVersion",
    'outputs': [{
      'internalType': 'uint16',
      'name': '',
      'type': "uint16"
    }],
    'stateMutability': 'pure',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }],
    'name': "payoutsAA",
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }],
    'name': 'payoutsPerCombination',
    'outputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': '_client',
      'type': 'address'
    }],
    'name': "refundGame",
    'outputs': [{
      'internalType': "bool",
      'name': '',
      'type': 'bool'
    }],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [],
    'name': "roleStore",
    'outputs': [{
      'internalType': "contract RoleStore",
      'name': '',
      'type': 'address'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': "_combination",
      'type': "uint256"
    }, {
      'internalType': "uint256",
      'name': '_payout',
      'type': "uint256"
    }],
    'name': 'setPayoutsAA',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '_combination',
      'type': "uint256"
    }, {
      'internalType': "uint256",
      'name': '_payout',
      'type': "uint256"
    }],
    'name': "setPayoutsPerCombination",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [],
    'name': "totalPaidIn",
    'outputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [],
    'name': "totalPaidOut",
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': "view",
    'type': 'function'
  }];
  export const ABI5 = [{
    'inputs': [{
      'internalType': "contract RoleStore",
      'name': '_roleStore',
      'type': "address"
    }, {
      'internalType': "contract Config",
      'name': '_config',
      'type': 'address'
    }, {
      'internalType': "contract BudgetMiddleware",
      'name': '_budget',
      'type': 'address'
    }],
    'stateMutability': 'nonpayable',
    'type': "constructor"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "client",
      'type': "address"
    }],
    'name': 'AlreadyRevealed',
    'type': 'error'
  }, {
    'inputs': [],
    'name': 'ChoiceNotAllowed',
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "client",
      'type': 'address'
    }],
    'name': "GameEndsAfterReveal",
    'type': "error"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'client',
      'type': 'address'
    }],
    'name': "HasUncompletedGame",
    'type': "error"
  }, {
    'inputs': [{
      'internalType': 'uint32',
      'name': 'numberCellsToReveal',
      'type': 'uint32'
    }],
    'name': 'InvalidNumberCellsToReveal',
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "uint128",
      'name': 'given',
      'type': "uint128"
    }, {
      'internalType': "uint128",
      'name': "max",
      'type': 'uint128'
    }],
    'name': "MaxWagerExceeded",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "uint128",
      'name': 'given',
      'type': 'uint128'
    }, {
      'internalType': 'uint128',
      'name': 'min',
      'type': 'uint128'
    }],
    'name': "MinWagerNotMet",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "client",
      'type': "address"
    }],
    'name': 'OnlyRevealAfterFill',
    'type': "error"
  }, {
    'inputs': [],
    'name': "ReentrancyGuardReentrantCall",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "msgSender",
      'type': "address"
    }, {
      'internalType': "string",
      'name': "role",
      'type': 'string'
    }],
    'name': 'Unauthorized',
    'type': 'error'
  }, {
    'inputs': [],
    'name': 'BASIS_POINTS',
    'outputs': [{
      'internalType': "uint32",
      'name': '',
      'type': 'uint32'
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'client',
      'type': 'address'
    }, {
      'internalType': "address",
      'name': 'bankroll',
      'type': 'address'
    }, {
      'internalType': 'bytes',
      'name': "data",
      'type': 'bytes'
    }],
    'name': 'bet',
    'outputs': [{
      'components': [{
        'internalType': "uint128",
        'name': "escrow",
        'type': "uint128"
      }, {
        'internalType': "uint128",
        'name': 'payback',
        'type': "uint128"
      }, {
        'internalType': 'uint128',
        'name': "payout",
        'type': 'uint128'
      }, {
        'internalType': 'uint32',
        'name': "delay",
        'type': "uint32"
      }, {
        'internalType': "uint8",
        'name': 'iterate',
        'type': 'uint8'
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': "signal",
        'type': "uint8"
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': "tuple"
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': 'string',
            'name': "key",
            'type': "string"
          }, {
            'internalType': 'bytes',
            'name': "value",
            'type': "bytes"
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': 'items',
          'type': 'tuple[]'
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': "list",
        'type': "tuple"
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [],
    'name': "budget",
    'outputs': [{
      'internalType': "contract BudgetMiddleware",
      'name': '',
      'type': 'address'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'config',
    'outputs': [{
      'internalType': "contract Config",
      'name': '',
      'type': "address"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "client",
      'type': "address"
    }],
    'name': "emergencyRefund",
    'outputs': [{
      'internalType': 'bool',
      'name': '',
      'type': "bool"
    }],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "client",
      'type': "address"
    }, {
      'internalType': 'address',
      'name': '',
      'type': 'address'
    }, {
      'internalType': 'bytes',
      'name': '',
      'type': 'bytes'
    }],
    'name': "endGame",
    'outputs': [{
      'components': [{
        'internalType': "uint128",
        'name': "escrow",
        'type': 'uint128'
      }, {
        'internalType': 'uint128',
        'name': 'payback',
        'type': 'uint128'
      }, {
        'internalType': 'uint128',
        'name': "payout",
        'type': "uint128"
      }, {
        'internalType': 'uint32',
        'name': "delay",
        'type': 'uint32'
      }, {
        'internalType': 'uint8',
        'name': 'iterate',
        'type': "uint8"
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': 'signal',
        'type': "uint8"
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': 'tuple'
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': 'string',
            'name': "key",
            'type': "string"
          }, {
            'internalType': 'bytes',
            'name': "value",
            'type': "bytes"
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': 'items',
          'type': 'tuple[]'
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': "list",
        'type': 'tuple'
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "client",
      'type': 'address'
    }, {
      'internalType': "uint256[]",
      'name': 'randoms',
      'type': 'uint256[]'
    }],
    'name': 'fill',
    'outputs': [{
      'components': [{
        'internalType': "uint128",
        'name': 'escrow',
        'type': "uint128"
      }, {
        'internalType': 'uint128',
        'name': 'payback',
        'type': "uint128"
      }, {
        'internalType': 'uint128',
        'name': "payout",
        'type': 'uint128'
      }, {
        'internalType': 'uint32',
        'name': "delay",
        'type': 'uint32'
      }, {
        'internalType': "uint8",
        'name': "iterate",
        'type': "uint8"
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': 'signal',
        'type': "uint8"
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': "tuple"
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': 'string',
            'name': 'key',
            'type': 'string'
          }, {
            'internalType': 'bytes',
            'name': 'value',
            'type': "bytes"
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': "items",
          'type': "tuple[]"
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': "list",
        'type': "tuple"
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': '',
      'type': "address"
    }],
    'name': "games",
    'outputs': [{
      'internalType': "enum Mines.Status",
      'name': "status",
      'type': "uint8"
    }, {
      'internalType': "address",
      'name': 'client',
      'type': 'address'
    }, {
      'internalType': "address",
      'name': 'bankroll',
      'type': 'address'
    }, {
      'internalType': 'uint256',
      'name': 'wager',
      'type': "uint256"
    }, {
      'internalType': 'uint64',
      'name': "currentMultiplier",
      'type': 'uint64'
    }, {
      'internalType': 'uint8',
      'name': "numMines",
      'type': 'uint8'
    }, {
      'internalType': "bool",
      'name': "isCashout",
      'type': 'bool'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': "_numMines",
      'type': "uint256"
    }, {
      'internalType': 'uint256',
      'name': "_numRevealed",
      'type': 'uint256'
    }],
    'name': "getMultipliers",
    'outputs': [{
      'internalType': "uint256",
      'name': "multiplier_",
      'type': 'uint256'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'player',
      'type': 'address'
    }],
    'name': 'getPlayerStatus',
    'outputs': [{
      'components': [{
        'internalType': "enum Mines.Status",
        'name': "status",
        'type': 'uint8'
      }, {
        'internalType': "address",
        'name': "client",
        'type': "address"
      }, {
        'internalType': "address",
        'name': "bankroll",
        'type': 'address'
      }, {
        'internalType': "uint256",
        'name': 'wager',
        'type': 'uint256'
      }, {
        'internalType': "uint64",
        'name': 'currentMultiplier',
        'type': 'uint64'
      }, {
        'internalType': 'uint8',
        'name': "numMines",
        'type': "uint8"
      }, {
        'internalType': 'bool[25]',
        'name': 'revealedCells',
        'type': 'bool[25]'
      }, {
        'internalType': "bool[25]",
        'name': 'cellsPicked',
        'type': "bool[25]"
      }, {
        'internalType': "bool[25]",
        'name': 'mines',
        'type': "bool[25]"
      }, {
        'internalType': 'bool',
        'name': 'isCashout',
        'type': 'bool'
      }],
      'internalType': "struct Mines.Game",
      'name': '',
      'type': "tuple"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'getType',
    'outputs': [{
      'internalType': 'string',
      'name': '',
      'type': 'string'
    }],
    'stateMutability': "pure",
    'type': "function"
  }, {
    'inputs': [],
    'name': "getVersion",
    'outputs': [{
      'internalType': 'uint16',
      'name': '',
      'type': 'uint16'
    }],
    'stateMutability': 'pure',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': "address"
    }],
    'name': 'refund',
    'outputs': [{
      'internalType': "bool",
      'name': '',
      'type': 'bool'
    }],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "client",
      'type': "address"
    }, {
      'internalType': "address",
      'name': '',
      'type': 'address'
    }, {
      'internalType': 'bytes',
      'name': "data",
      'type': "bytes"
    }],
    'name': 'revealCells',
    'outputs': [{
      'components': [{
        'internalType': "uint128",
        'name': 'escrow',
        'type': "uint128"
      }, {
        'internalType': 'uint128',
        'name': 'payback',
        'type': 'uint128'
      }, {
        'internalType': "uint128",
        'name': "payout",
        'type': 'uint128'
      }, {
        'internalType': "uint32",
        'name': 'delay',
        'type': 'uint32'
      }, {
        'internalType': 'uint8',
        'name': 'iterate',
        'type': "uint8"
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': 'signal',
        'type': 'uint8'
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': "tuple"
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': "string",
            'name': 'key',
            'type': "string"
          }, {
            'internalType': 'bytes',
            'name': "value",
            'type': 'bytes'
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': "items",
          'type': "tuple[]"
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': 'list',
        'type': 'tuple'
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [],
    'name': 'roleStore',
    'outputs': [{
      'internalType': "contract RoleStore",
      'name': '',
      'type': 'address'
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint8[24]',
      'name': 'maxReveal',
      'type': 'uint8[24]'
    }],
    'name': 'setMaxReveal',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '_numMines',
      'type': 'uint256'
    }],
    'name': 'setMultipliers',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }];
  export const ABI6 = [{
    'inputs': [{
      'internalType': "contract RoleStore",
      'name': "_roleStore",
      'type': 'address'
    }, {
      'internalType': "contract Config",
      'name': "_config",
      'type': "address"
    }, {
      'internalType': "contract BudgetMiddleware",
      'name': "_budget",
      'type': 'address'
    }],
    'stateMutability': 'nonpayable',
    'type': "constructor"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'client',
      'type': 'address'
    }],
    'name': 'AlreadyCompleted',
    'type': "error"
  }, {
    'inputs': [{
      'internalType': "uint16",
      'name': 'index',
      'type': "uint16"
    }],
    'name': "FirstIndexMustBeZero",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': "address"
    }],
    'name': 'HasUncompletedGame',
    'type': "error"
  }, {
    'inputs': [{
      'internalType': 'uint8',
      'name': "index",
      'type': "uint8"
    }],
    'name': "InFreeSpin",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': 'uint16',
      'name': 'index',
      'type': 'uint16'
    }],
    'name': "IndexOutOfBound",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "uint128",
      'name': 'given',
      'type': 'uint128'
    }, {
      'internalType': 'uint128',
      'name': "max",
      'type': 'uint128'
    }],
    'name': "MaxWagerExceeded",
    'type': "error"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "client",
      'type': 'address'
    }],
    'name': "NoFreeSpin",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "uint16",
      'name': 'payout',
      'type': "uint16"
    }],
    'name': "PayoutShouldGreaterThanZero",
    'type': 'error'
  }, {
    'inputs': [],
    'name': "ReentrancyGuardReentrantCall",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'msgSender',
      'type': 'address'
    }, {
      'internalType': "string",
      'name': 'role',
      'type': "string"
    }],
    'name': "Unauthorized",
    'type': "error"
  }, {
    'inputs': [{
      'internalType': 'uint32',
      'name': "sum",
      'type': "uint32"
    }],
    'name': "WeightSumIncorrect",
    'type': 'error'
  }, {
    'inputs': [],
    'name': "MULTIPLIER_MAX_WAGER_PACKAGE",
    'outputs': [{
      'internalType': "uint8",
      'name': '',
      'type': 'uint8'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [],
    'name': 'REEL_ROWS',
    'outputs': [{
      'internalType': 'uint16',
      'name': '',
      'type': "uint16"
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'client',
      'type': 'address'
    }, {
      'internalType': "address",
      'name': 'bankroll',
      'type': "address"
    }, {
      'internalType': 'bytes',
      'name': 'data',
      'type': 'bytes'
    }],
    'name': 'bet',
    'outputs': [{
      'components': [{
        'internalType': "uint128",
        'name': 'escrow',
        'type': 'uint128'
      }, {
        'internalType': 'uint128',
        'name': 'payback',
        'type': 'uint128'
      }, {
        'internalType': 'uint128',
        'name': 'payout',
        'type': "uint128"
      }, {
        'internalType': "uint32",
        'name': "delay",
        'type': "uint32"
      }, {
        'internalType': 'uint8',
        'name': 'iterate',
        'type': "uint8"
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': 'signal',
        'type': 'uint8'
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': 'tuple'
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': "string",
            'name': "key",
            'type': "string"
          }, {
            'internalType': 'bytes',
            'name': "value",
            'type': 'bytes'
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': 'items',
          'type': 'tuple[]'
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': 'list',
        'type': "tuple"
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [],
    'name': 'budget',
    'outputs': [{
      'internalType': "contract BudgetMiddleware",
      'name': '',
      'type': 'address'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "client",
      'type': 'address'
    }, {
      'internalType': 'address',
      'name': "bankroll",
      'type': "address"
    }, {
      'internalType': 'bytes',
      'name': 'data',
      'type': 'bytes'
    }],
    'name': 'buyFreeSpins',
    'outputs': [{
      'components': [{
        'internalType': "uint128",
        'name': "escrow",
        'type': "uint128"
      }, {
        'internalType': 'uint128',
        'name': "payback",
        'type': "uint128"
      }, {
        'internalType': 'uint128',
        'name': 'payout',
        'type': 'uint128'
      }, {
        'internalType': 'uint32',
        'name': "delay",
        'type': "uint32"
      }, {
        'internalType': "uint8",
        'name': "iterate",
        'type': "uint8"
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': "signal",
        'type': 'uint8'
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': 'tuple'
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': "string",
            'name': "key",
            'type': 'string'
          }, {
            'internalType': "bytes",
            'name': "value",
            'type': 'bytes'
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': "items",
          'type': 'tuple[]'
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': "list",
        'type': 'tuple'
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': "tuple"
    }],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [],
    'name': "config",
    'outputs': [{
      'internalType': "contract Config",
      'name': '',
      'type': 'address'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'doubleChanceDivisor',
    'outputs': [{
      'internalType': "uint8",
      'name': '',
      'type': "uint8"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }, {
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }],
    'name': 'doubleChanceReelFreeSpinWeights',
    'outputs': [{
      'internalType': "uint16",
      'name': '',
      'type': 'uint16'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }, {
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }],
    'name': 'doubleChanceWeights',
    'outputs': [{
      'internalType': 'uint16',
      'name': '',
      'type': 'uint16'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "client",
      'type': 'address'
    }],
    'name': "emergencyRefund",
    'outputs': [{
      'internalType': 'bool',
      'name': '',
      'type': "bool"
    }],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': 'address'
    }, {
      'internalType': "uint256[]",
      'name': 'randoms',
      'type': 'uint256[]'
    }],
    'name': 'fill',
    'outputs': [{
      'components': [{
        'internalType': "uint128",
        'name': 'escrow',
        'type': "uint128"
      }, {
        'internalType': 'uint128',
        'name': "payback",
        'type': "uint128"
      }, {
        'internalType': "uint128",
        'name': 'payout',
        'type': 'uint128'
      }, {
        'internalType': 'uint32',
        'name': "delay",
        'type': 'uint32'
      }, {
        'internalType': 'uint8',
        'name': 'iterate',
        'type': "uint8"
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': "signal",
        'type': "uint8"
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': 'tuple'
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': "string",
            'name': "key",
            'type': "string"
          }, {
            'internalType': 'bytes',
            'name': 'value',
            'type': "bytes"
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': 'items',
          'type': 'tuple[]'
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': 'list',
        'type': "tuple"
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': "tuple"
    }],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': "randomNumber",
      'type': "uint256"
    }, {
      'internalType': "uint16[12][6]",
      'name': 'weights',
      'type': 'uint16[12][6]'
    }, {
      'internalType': "uint16[30]",
      'name': 'reel',
      'type': 'uint16[30]'
    }, {
      'internalType': "uint16[6]",
      'name': 'remaining',
      'type': 'uint16[6]'
    }],
    'name': "fillReels",
    'outputs': [{
      'internalType': 'uint16[30]',
      'name': '',
      'type': "uint16[30]"
    }, {
      'internalType': "uint16[14]",
      'name': '',
      'type': "uint16[14]"
    }, {
      'internalType': "uint16[6]",
      'name': '',
      'type': 'uint16[6]'
    }, {
      'internalType': 'bool',
      'name': '',
      'type': 'bool'
    }],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': "randomNumber",
      'type': "uint256"
    }, {
      'internalType': "uint16[30]",
      'name': 'reel',
      'type': "uint16[30]"
    }, {
      'internalType': "uint8",
      'name': 'count',
      'type': 'uint8'
    }],
    'name': 'fillScatters',
    'outputs': [{
      'internalType': "uint16[30]",
      'name': '',
      'type': 'uint16[30]'
    }],
    'stateMutability': 'pure',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': "address"
    }, {
      'internalType': "address",
      'name': '',
      'type': "address"
    }, {
      'internalType': 'bytes',
      'name': '',
      'type': "bytes"
    }],
    'name': 'freeSpin',
    'outputs': [{
      'components': [{
        'internalType': 'uint128',
        'name': 'escrow',
        'type': "uint128"
      }, {
        'internalType': "uint128",
        'name': 'payback',
        'type': 'uint128'
      }, {
        'internalType': 'uint128',
        'name': "payout",
        'type': 'uint128'
      }, {
        'internalType': 'uint32',
        'name': "delay",
        'type': "uint32"
      }, {
        'internalType': "uint8",
        'name': 'iterate',
        'type': 'uint8'
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': 'signal',
        'type': 'uint8'
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': "tuple"
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': 'string',
            'name': "key",
            'type': 'string'
          }, {
            'internalType': "bytes",
            'name': "value",
            'type': 'bytes'
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': 'items',
          'type': "tuple[]"
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': "list",
        'type': "tuple"
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }, {
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'name': "freeSpinWeights",
    'outputs': [{
      'internalType': "uint16",
      'name': '',
      'type': "uint16"
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': 'a',
      'type': "uint256"
    }, {
      'internalType': 'uint256',
      'name': 'b',
      'type': "uint256"
    }],
    'name': "generateRandomNumber",
    'outputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': 'pure',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': 'a',
      'type': 'uint256'
    }, {
      'internalType': "uint256",
      'name': 'b',
      'type': "uint256"
    }, {
      'internalType': 'uint256',
      'name': 'c',
      'type': "uint256"
    }],
    'name': "generateRandomNumber",
    'outputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': "pure",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint128",
      'name': "wager",
      'type': "uint128"
    }],
    'name': 'getDoubleChanceCost',
    'outputs': [{
      'internalType': 'uint256',
      'name': 'tokenAmount_',
      'type': "uint256"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [],
    'name': "getDoubleChanceReelFreeSpinWeights",
    'outputs': [{
      'internalType': 'uint16[12][6]',
      'name': '',
      'type': 'uint16[12][6]'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [],
    'name': 'getDoubleChanceWeights',
    'outputs': [{
      'internalType': "uint16[12][6]",
      'name': '',
      'type': 'uint16[12][6]'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint128',
      'name': "wager",
      'type': 'uint128'
    }],
    'name': 'getFreeSpinTokenAmount',
    'outputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }],
    'stateMutability': 'pure',
    'type': "function"
  }, {
    'inputs': [],
    'name': "getFreeSpinWeights",
    'outputs': [{
      'internalType': "uint16[12][6]",
      'name': '',
      'type': 'uint16[12][6]'
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': "getInitialFreeSpinWeights",
    'outputs': [{
      'internalType': 'uint16[12][6]',
      'name': '',
      'type': "uint16[12][6]"
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [],
    'name': "getMultiplierWeights",
    'outputs': [{
      'internalType': "uint16[15]",
      'name': '',
      'type': "uint16[15]"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [],
    'name': "getNormalReelFreeSpinWeights",
    'outputs': [{
      'internalType': 'uint16[12][6]',
      'name': '',
      'type': 'uint16[12][6]'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [],
    'name': "getNormalSpinWeights",
    'outputs': [{
      'internalType': 'uint16[12][6]',
      'name': '',
      'type': 'uint16[12][6]'
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': "getPayoutEightOrMore",
    'outputs': [{
      'internalType': 'uint16[10]',
      'name': '',
      'type': "uint16[10]"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [],
    'name': "getPayoutTenOrMore",
    'outputs': [{
      'internalType': "uint16[10]",
      'name': '',
      'type': "uint16[10]"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'getPayoutTwelveOrMore',
    'outputs': [{
      'internalType': 'uint16[10]',
      'name': '',
      'type': "uint16[10]"
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': 'address'
    }],
    'name': 'getPlayerStatus',
    'outputs': [{
      'components': [{
        'internalType': "uint8",
        'name': 'freeSpinCount',
        'type': 'uint8'
      }, {
        'internalType': "uint128",
        'name': 'wager',
        'type': "uint128"
      }, {
        'internalType': 'uint32',
        'name': "bufferedFreeSpinWinnings",
        'type': "uint32"
      }, {
        'internalType': 'uint32',
        'name': "multiplier",
        'type': "uint32"
      }, {
        'internalType': "enum IPrincessWINR.SpinType",
        'name': 'spinType',
        'type': "uint8"
      }, {
        'internalType': "enum IPrincessWINR.State",
        'name': 'state',
        'type': 'uint8'
      }],
      'internalType': "struct IPrincessWINR.Game",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint16',
      'name': 'symbol',
      'type': 'uint16'
    }],
    'name': 'getSymbolName',
    'outputs': [{
      'internalType': 'string',
      'name': '',
      'type': "string"
    }],
    'stateMutability': "pure",
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'getType',
    'outputs': [{
      'internalType': "string",
      'name': '',
      'type': 'string'
    }],
    'stateMutability': 'pure',
    'type': "function"
  }, {
    'inputs': [],
    'name': 'getVersion',
    'outputs': [{
      'internalType': 'uint16',
      'name': '',
      'type': 'uint16'
    }],
    'stateMutability': "pure",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "enum IPrincessWINR.SpinType",
      'name': "spinType",
      'type': "uint8"
    }],
    'name': "getWeights",
    'outputs': [{
      'internalType': 'uint16[12][6]',
      'name': '',
      'type': "uint16[12][6]"
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }, {
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }],
    'name': "initialFreeSpinWeights",
    'outputs': [{
      'internalType': 'uint16',
      'name': '',
      'type': 'uint16'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [],
    'name': 'maxWagerMultiplier',
    'outputs': [{
      'internalType': 'uint128',
      'name': '',
      'type': "uint128"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }, {
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }],
    'name': 'normalReelFreeSpinWeights',
    'outputs': [{
      'internalType': "uint16",
      'name': '',
      'type': 'uint16'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }, {
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }],
    'name': 'normalSpinWeights',
    'outputs': [{
      'internalType': "uint16",
      'name': '',
      'type': 'uint16'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': "randomNumber",
      'type': 'uint256'
    }, {
      'internalType': "uint16[12][6]",
      'name': "weights",
      'type': "uint16[12][6]"
    }, {
      'internalType': "uint16[30]",
      'name': 'reel',
      'type': 'uint16[30]'
    }, {
      'internalType': "uint16[6]",
      'name': 'remaining',
      'type': "uint16[6]"
    }, {
      'internalType': 'uint32',
      'name': "multiplier",
      'type': "uint32"
    }, {
      'internalType': "uint32",
      'name': "payoutMultiplier",
      'type': "uint32"
    }, {
      'internalType': "uint8",
      'name': 'turn',
      'type': 'uint8'
    }],
    'name': "processReel",
    'outputs': [{
      'internalType': "uint16[30]",
      'name': '',
      'type': "uint16[30]"
    }, {
      'internalType': 'uint8',
      'name': '',
      'type': 'uint8'
    }, {
      'internalType': 'uint32',
      'name': '',
      'type': "uint32"
    }, {
      'internalType': 'uint16',
      'name': '',
      'type': 'uint16'
    }, {
      'internalType': 'uint16',
      'name': '',
      'type': "uint16"
    }],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': 'address'
    }],
    'name': 'refund',
    'outputs': [{
      'internalType': "bool",
      'name': '',
      'type': 'bool'
    }],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint16",
      'name': "scatter",
      'type': 'uint16'
    }],
    'name': 'returnScatterMultiplier',
    'outputs': [{
      'internalType': 'uint16',
      'name': '',
      'type': "uint16"
    }],
    'stateMutability': 'pure',
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'roleStore',
    'outputs': [{
      'internalType': "contract RoleStore",
      'name': '',
      'type': "address"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint16[30]",
      'name': 'grid',
      'type': "uint16[30]"
    }, {
      'internalType': "uint16[14]",
      'name': 'symbolCounts',
      'type': "uint16[14]"
    }],
    'name': 'seekAndDestroy',
    'outputs': [{
      'internalType': 'uint16[30]',
      'name': '',
      'type': "uint16[30]"
    }],
    'stateMutability': 'pure',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint8",
      'name': 'divisor',
      'type': 'uint8'
    }],
    'name': 'setDoubleChanceDivisor',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint16',
      'name': 'index',
      'type': "uint16"
    }, {
      'internalType': 'uint16[12]',
      'name': 'weights',
      'type': 'uint16[12]'
    }],
    'name': "setDoubleChanceReelFreeSpinWeights",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint16",
      'name': 'index',
      'type': "uint16"
    }, {
      'internalType': "uint16[12]",
      'name': "weights",
      'type': "uint16[12]"
    }],
    'name': "setDoubleChanceWeights",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint16",
      'name': 'index',
      'type': 'uint16'
    }, {
      'internalType': 'uint16[12]',
      'name': 'weights',
      'type': "uint16[12]"
    }],
    'name': 'setFreeSpinWeights',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint16',
      'name': 'index',
      'type': 'uint16'
    }, {
      'internalType': "uint16[12]",
      'name': 'weights',
      'type': "uint16[12]"
    }],
    'name': "setInitialFreeSpinWeights",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint128",
      'name': '_maxWagerMultiplier',
      'type': 'uint128'
    }],
    'name': "setMaxWagerMultiplier",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint16[15]',
      'name': '_multiplierWeights',
      'type': 'uint16[15]'
    }],
    'name': 'setMultiplierWeights',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint16",
      'name': "index",
      'type': "uint16"
    }, {
      'internalType': 'uint16[12]',
      'name': "weights",
      'type': "uint16[12]"
    }],
    'name': "setNormalReelFreeSpinWeight",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint16",
      'name': "index",
      'type': 'uint16'
    }, {
      'internalType': 'uint16[12]',
      'name': 'weights',
      'type': 'uint16[12]'
    }],
    'name': 'setNormalSpinWeight',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint16[10]',
      'name': "payouts",
      'type': "uint16[10]"
    }],
    'name': 'setPayoutEightOrMore',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint16[10]",
      'name': "payouts",
      'type': 'uint16[10]'
    }],
    'name': 'setPayoutTenOrMore',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint16[10]",
      'name': "payouts",
      'type': 'uint16[10]'
    }],
    'name': "setPayoutTwelveOrMore",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }];
  export const ABI7 = [{
    'inputs': [{
      'internalType': "contract RoleStore",
      'name': "_roleStore",
      'type': "address"
    }, {
      'internalType': "contract StatisticStore",
      'name': '_statisticStore',
      'type': "address"
    }],
    'stateMutability': 'nonpayable',
    'type': "constructor"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "client",
      'type': "address"
    }],
    'name': "GameHalted",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "msgSender",
      'type': 'address'
    }, {
      'internalType': "string",
      'name': "role",
      'type': "string"
    }],
    'name': "Unauthorized",
    'type': "error"
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': false,
      'internalType': 'address',
      'name': 'player',
      'type': "address"
    }, {
      'indexed': false,
      'internalType': 'uint8',
      'name': "level",
      'type': 'uint8'
    }],
    'name': "LevelUp",
    'type': 'event'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "player",
      'type': 'address'
    }, {
      'internalType': "address[]",
      'name': "bankrolls",
      'type': 'address[]'
    }],
    'name': 'getClaimable',
    'outputs': [{
      'components': [{
        'internalType': 'uint80',
        'name': "profit",
        'type': 'uint80'
      }, {
        'internalType': 'uint80',
        'name': 'loss',
        'type': "uint80"
      }, {
        'internalType': "uint96",
        'name': "volume",
        'type': 'uint96'
      }],
      'internalType': "struct Statistic.Props[]",
      'name': '',
      'type': 'tuple[]'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'player',
      'type': 'address'
    }, {
      'internalType': 'address[]',
      'name': "bankrolls",
      'type': "address[]"
    }],
    'name': "getClaimableByBankrolls",
    'outputs': [{
      'components': [{
        'internalType': "uint80",
        'name': "profit",
        'type': 'uint80'
      }, {
        'internalType': 'uint80',
        'name': "loss",
        'type': "uint80"
      }, {
        'internalType': 'uint96',
        'name': "volume",
        'type': 'uint96'
      }],
      'internalType': "struct Statistic.Props[]",
      'name': '',
      'type': "tuple[]"
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "player",
      'type': "address"
    }],
    'name': "getLevelByPlayer",
    'outputs': [{
      'internalType': 'uint8',
      'name': '',
      'type': "uint8"
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': "address"
    }],
    'name': "getPlayerStatus",
    'outputs': [{
      'components': [{
        'internalType': 'uint96',
        'name': "nextLevelVolume",
        'type': "uint96"
      }, {
        'internalType': "uint8",
        'name': 'level',
        'type': "uint8"
      }, {
        'internalType': 'bool',
        'name': "halted",
        'type': 'bool'
      }],
      'internalType': "struct RankMiddleware.Player",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'bytes32',
      'name': 'prefix',
      'type': 'bytes32'
    }, {
      'internalType': "address",
      'name': "player",
      'type': 'address'
    }, {
      'internalType': "address[]",
      'name': "bankrolls",
      'type': 'address[]'
    }],
    'name': 'getSnapshot',
    'outputs': [{
      'components': [{
        'internalType': 'uint80',
        'name': "profit",
        'type': 'uint80'
      }, {
        'internalType': "uint80",
        'name': "loss",
        'type': "uint80"
      }, {
        'internalType': 'uint96',
        'name': 'volume',
        'type': "uint96"
      }],
      'internalType': "struct Statistic.Props[]",
      'name': '',
      'type': 'tuple[]'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': "address"
    }, {
      'internalType': "bool",
      'name': 'halt',
      'type': 'bool'
    }],
    'name': 'haltPlayer',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'name': "levels",
    'outputs': [{
      'internalType': 'uint96',
      'name': '',
      'type': 'uint96'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'components': [{
        'components': [{
          'internalType': "address",
          'name': 'operator',
          'type': 'address'
        }, {
          'internalType': 'uint128',
          'name': 'lastRequestId',
          'type': "uint128"
        }, {
          'internalType': 'uint64',
          'name': 'startBlock',
          'type': 'uint64'
        }, {
          'internalType': 'uint64',
          'name': 'endBlock',
          'type': 'uint64'
        }, {
          'internalType': 'uint64',
          'name': 'lastSeen',
          'type': "uint64"
        }],
        'internalType': "struct Session.Detail",
        'name': "detail",
        'type': "tuple"
      }, {
        'components': [{
          'internalType': 'uint8',
          'name': 'decimals',
          'type': "uint8"
        }, {
          'internalType': 'uint8',
          'name': 'tokenDecimals',
          'type': "uint8"
        }, {
          'internalType': 'uint64',
          'name': "value",
          'type': 'uint64'
        }],
        'internalType': "struct Price.Props",
        'name': "price",
        'type': 'tuple'
      }, {
        'internalType': "enum Session.Status",
        'name': 'status',
        'type': "uint8"
      }, {
        'internalType': "address",
        'name': "token",
        'type': 'address'
      }, {
        'internalType': 'address',
        'name': "program",
        'type': "address"
      }, {
        'internalType': "address",
        'name': "client",
        'type': 'address'
      }, {
        'internalType': "uint128",
        'name': 'escrow',
        'type': 'uint128'
      }, {
        'internalType': "uint128",
        'name': 'payout',
        'type': 'uint128'
      }, {
        'internalType': "address",
        'name': "bankroll",
        'type': 'address'
      }],
      'internalType': "struct Session.Props",
      'name': 'session',
      'type': 'tuple'
    }],
    'name': 'onBegin',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'components': [{
        'components': [{
          'internalType': "address",
          'name': 'operator',
          'type': 'address'
        }, {
          'internalType': "uint128",
          'name': "lastRequestId",
          'type': 'uint128'
        }, {
          'internalType': "uint64",
          'name': 'startBlock',
          'type': "uint64"
        }, {
          'internalType': 'uint64',
          'name': "endBlock",
          'type': 'uint64'
        }, {
          'internalType': "uint64",
          'name': 'lastSeen',
          'type': "uint64"
        }],
        'internalType': "struct Session.Detail",
        'name': "detail",
        'type': "tuple"
      }, {
        'components': [{
          'internalType': 'uint8',
          'name': "decimals",
          'type': 'uint8'
        }, {
          'internalType': "uint8",
          'name': "tokenDecimals",
          'type': 'uint8'
        }, {
          'internalType': "uint64",
          'name': "value",
          'type': 'uint64'
        }],
        'internalType': "struct Price.Props",
        'name': 'price',
        'type': "tuple"
      }, {
        'internalType': "enum Session.Status",
        'name': "status",
        'type': "uint8"
      }, {
        'internalType': 'address',
        'name': 'token',
        'type': 'address'
      }, {
        'internalType': "address",
        'name': 'program',
        'type': "address"
      }, {
        'internalType': "address",
        'name': 'client',
        'type': "address"
      }, {
        'internalType': "uint128",
        'name': 'escrow',
        'type': "uint128"
      }, {
        'internalType': 'uint128',
        'name': "payout",
        'type': 'uint128'
      }, {
        'internalType': "address",
        'name': 'bankroll',
        'type': 'address'
      }],
      'internalType': "struct Session.Props",
      'name': "session",
      'type': 'tuple'
    }, {
      'components': [{
        'internalType': "uint128",
        'name': "payin",
        'type': "uint128"
      }, {
        'internalType': 'uint128',
        'name': 'payout',
        'type': 'uint128'
      }, {
        'internalType': "address",
        'name': 'recipient',
        'type': "address"
      }, {
        'internalType': "address",
        'name': 'token',
        'type': "address"
      }, {
        'internalType': "address",
        'name': "bankroll",
        'type': "address"
      }],
      'internalType': "struct CashierUtils.Receipt",
      'name': '',
      'type': "tuple"
    }],
    'name': 'onSettlement',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': '',
      'type': "address"
    }],
    'name': "players",
    'outputs': [{
      'internalType': 'uint96',
      'name': 'nextLevelVolume',
      'type': 'uint96'
    }, {
      'internalType': 'uint8',
      'name': "level",
      'type': "uint8"
    }, {
      'internalType': "bool",
      'name': "halted",
      'type': "bool"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': "roleStore",
    'outputs': [{
      'internalType': "contract RoleStore",
      'name': '',
      'type': 'address'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint8',
      'name': 'index',
      'type': 'uint8'
    }, {
      'internalType': 'uint96',
      'name': 'level',
      'type': 'uint96'
    }],
    'name': 'setLevel',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "player",
      'type': 'address'
    }, {
      'internalType': "address[]",
      'name': 'bankrolls',
      'type': "address[]"
    }],
    'name': 'takeClaimSnapshot',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "client",
      'type': "address"
    }, {
      'components': [{
        'internalType': 'uint80',
        'name': "profit",
        'type': "uint80"
      }, {
        'internalType': "uint80",
        'name': 'loss',
        'type': "uint80"
      }, {
        'internalType': 'uint96',
        'name': 'volume',
        'type': 'uint96'
      }],
      'internalType': "struct Statistic.Props",
      'name': 'totalStat',
      'type': "tuple"
    }, {
      'internalType': 'address[]',
      'name': 'bankrolls',
      'type': 'address[]'
    }],
    'name': 'takeLevelUpSnapshot',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }];
  export const ABI8 = [{
    'inputs': [],
    'name': 'NotOwner',
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': "index",
      'type': 'uint256'
    }],
    'name': "OutOfBound",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': 'uint64',
      'name': 'id',
      'type': 'uint64'
    }, {
      'components': [{
        'internalType': 'uint8',
        'name': "term",
        'type': "uint8"
      }, {
        'internalType': "uint8",
        'name': 'type_',
        'type': 'uint8'
      }, {
        'internalType': "uint8",
        'name': "amount",
        'type': "uint8"
      }],
      'internalType': "struct Bet.Props",
      'name': 'item',
      'type': 'tuple'
    }, {
      'components': [{
        'internalType': 'uint96',
        'name': "amount",
        'type': 'uint96'
      }, {
        'internalType': "uint8",
        'name': 'option',
        'type': "uint8"
      }],
      'internalType': "struct Action.Props",
      'name': 'action',
      'type': "tuple"
    }],
    'name': 'addBetCondition',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint64",
      'name': 'id',
      'type': 'uint64'
    }, {
      'components': [{
        'internalType': "uint8",
        'name': 'type_',
        'type': "uint8"
      }, {
        'internalType': 'uint8',
        'name': "term",
        'type': "uint8"
      }, {
        'internalType': "uint96",
        'name': 'amount',
        'type': "uint96"
      }],
      'internalType': "struct Profit.Props",
      'name': "item",
      'type': "tuple"
    }, {
      'components': [{
        'internalType': 'uint96',
        'name': "amount",
        'type': "uint96"
      }, {
        'internalType': "uint8",
        'name': 'option',
        'type': "uint8"
      }],
      'internalType': "struct Action.Props",
      'name': 'action',
      'type': 'tuple'
    }],
    'name': 'addProfitCondition',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "string",
      'name': 'name',
      'type': 'string'
    }],
    'name': 'create',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint64",
      'name': 'strategyId',
      'type': "uint64"
    }],
    'name': "get",
    'outputs': [{
      'components': [{
        'internalType': "uint32[]",
        'name': "itemIds",
        'type': "uint32[]"
      }, {
        'internalType': "string",
        'name': 'name',
        'type': "string"
      }, {
        'internalType': 'address',
        'name': 'owner',
        'type': "address"
      }],
      'internalType': "struct Strategy.Props",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint64",
      'name': 'strategyId',
      'type': 'uint64'
    }],
    'name': 'getItems',
    'outputs': [{
      'components': [{
        'components': [{
          'internalType': 'uint8',
          'name': 'term',
          'type': "uint8"
        }, {
          'internalType': 'uint8',
          'name': "type_",
          'type': "uint8"
        }, {
          'internalType': "uint8",
          'name': 'amount',
          'type': 'uint8'
        }],
        'internalType': "struct Bet.Props",
        'name': 'bet',
        'type': 'tuple'
      }, {
        'components': [{
          'internalType': 'uint8',
          'name': 'type_',
          'type': "uint8"
        }, {
          'internalType': 'uint8',
          'name': 'term',
          'type': 'uint8'
        }, {
          'internalType': "uint96",
          'name': "amount",
          'type': "uint96"
        }],
        'internalType': "struct Profit.Props",
        'name': 'profit',
        'type': 'tuple'
      }, {
        'components': [{
          'internalType': "uint96",
          'name': "amount",
          'type': 'uint96'
        }, {
          'internalType': "uint8",
          'name': "option",
          'type': 'uint8'
        }],
        'internalType': "struct Action.Props",
        'name': 'action',
        'type': 'tuple'
      }, {
        'internalType': "uint8",
        'name': "type_",
        'type': "uint8"
      }],
      'internalType': "struct Strategy.Item[]",
      'name': '',
      'type': 'tuple[]'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'name': "items",
    'outputs': [{
      'components': [{
        'internalType': "uint8",
        'name': 'term',
        'type': 'uint8'
      }, {
        'internalType': "uint8",
        'name': "type_",
        'type': "uint8"
      }, {
        'internalType': "uint8",
        'name': "amount",
        'type': 'uint8'
      }],
      'internalType': "struct Bet.Props",
      'name': "bet",
      'type': 'tuple'
    }, {
      'components': [{
        'internalType': 'uint8',
        'name': 'type_',
        'type': 'uint8'
      }, {
        'internalType': "uint8",
        'name': "term",
        'type': "uint8"
      }, {
        'internalType': "uint96",
        'name': 'amount',
        'type': "uint96"
      }],
      'internalType': "struct Profit.Props",
      'name': "profit",
      'type': 'tuple'
    }, {
      'components': [{
        'internalType': 'uint96',
        'name': 'amount',
        'type': "uint96"
      }, {
        'internalType': 'uint8',
        'name': "option",
        'type': "uint8"
      }],
      'internalType': "struct Action.Props",
      'name': "action",
      'type': 'tuple'
    }, {
      'internalType': "uint8",
      'name': "type_",
      'type': 'uint8'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'owner',
      'type': "address"
    }],
    'name': 'list',
    'outputs': [{
      'components': [{
        'internalType': "uint32[]",
        'name': 'itemIds',
        'type': "uint32[]"
      }, {
        'internalType': "string",
        'name': 'name',
        'type': "string"
      }, {
        'internalType': 'address',
        'name': "owner",
        'type': "address"
      }],
      'internalType': "struct Strategy.Props[]",
      'name': '',
      'type': 'tuple[]'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': '',
      'type': 'address'
    }, {
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }],
    'name': "relatedIds",
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint64',
      'name': 'id',
      'type': "uint64"
    }, {
      'internalType': "uint64",
      'name': 'index',
      'type': "uint64"
    }],
    'name': 'remove',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }],
    'name': "strategies",
    'outputs': [{
      'internalType': 'string',
      'name': "name",
      'type': "string"
    }, {
      'internalType': "address",
      'name': "owner",
      'type': 'address'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint64",
      'name': 'id',
      'type': 'uint64'
    }, {
      'internalType': "uint64",
      'name': 'itemId',
      'type': 'uint64'
    }, {
      'components': [{
        'internalType': "uint8",
        'name': 'term',
        'type': 'uint8'
      }, {
        'internalType': 'uint8',
        'name': "type_",
        'type': 'uint8'
      }, {
        'internalType': "uint8",
        'name': 'amount',
        'type': "uint8"
      }],
      'internalType': "struct Bet.Props",
      'name': 'item',
      'type': 'tuple'
    }, {
      'components': [{
        'internalType': "uint96",
        'name': 'amount',
        'type': "uint96"
      }, {
        'internalType': 'uint8',
        'name': 'option',
        'type': 'uint8'
      }],
      'internalType': "struct Action.Props",
      'name': "action",
      'type': "tuple"
    }],
    'name': 'updateBetCondition',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint64",
      'name': 'id',
      'type': "uint64"
    }, {
      'internalType': "uint64",
      'name': 'itemId',
      'type': 'uint64'
    }, {
      'components': [{
        'internalType': 'uint8',
        'name': "type_",
        'type': "uint8"
      }, {
        'internalType': 'uint8',
        'name': 'term',
        'type': 'uint8'
      }, {
        'internalType': 'uint96',
        'name': "amount",
        'type': 'uint96'
      }],
      'internalType': "struct Profit.Props",
      'name': 'item',
      'type': 'tuple'
    }, {
      'components': [{
        'internalType': 'uint96',
        'name': 'amount',
        'type': 'uint96'
      }, {
        'internalType': "uint8",
        'name': "option",
        'type': "uint8"
      }],
      'internalType': "struct Action.Props",
      'name': 'action',
      'type': 'tuple'
    }],
    'name': 'updateProfitCondition',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }];
  export const ABI9 = [{
    'inputs': [{
      'internalType': "contract RoleStore",
      'name': '_roleStore',
      'type': "address"
    }, {
      'internalType': "contract Config",
      'name': '_config',
      'type': "address"
    }, {
      'internalType': "contract BudgetMiddleware",
      'name': "_budget",
      'type': "address"
    }],
    'stateMutability': "nonpayable",
    'type': "constructor"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "client",
      'type': "address"
    }],
    'name': "GameOver",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': 'address'
    }],
    'name': 'HasUncompletedGame',
    'type': "error"
  }, {
    'inputs': [],
    'name': "InvalidRandomNumber",
    'type': "error"
  }, {
    'inputs': [{
      'internalType': 'uint128',
      'name': 'given',
      'type': 'uint128'
    }, {
      'internalType': 'uint128',
      'name': "max",
      'type': "uint128"
    }],
    'name': 'MaxWagerExceeded',
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "uint128",
      'name': "given",
      'type': "uint128"
    }, {
      'internalType': "uint128",
      'name': "min",
      'type': "uint128"
    }],
    'name': 'MinWagerNotMet',
    'type': "error"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': "address"
    }],
    'name': "NoGame",
    'type': "error"
  }, {
    'inputs': [{
      'internalType': 'uint8',
      'name': 'payout',
      'type': "uint8"
    }],
    'name': 'PayoutShouldGreaterThanOne',
    'type': 'error'
  }, {
    'inputs': [],
    'name': "ReentrancyGuardReentrantCall",
    'type': "error"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'msgSender',
      'type': "address"
    }, {
      'internalType': "string",
      'name': 'role',
      'type': "string"
    }],
    'name': 'Unauthorized',
    'type': "error"
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': false,
      'internalType': 'uint64',
      'name': "houseEdge",
      'type': 'uint64'
    }],
    'name': 'UpdateHouseEdge',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': false,
      'internalType': "uint8[9]",
      'name': "payouts",
      'type': 'uint8[9]'
    }],
    'name': "UpdatePayouts",
    'type': 'event'
  }, {
    'inputs': [],
    'name': "budget",
    'outputs': [{
      'internalType': "contract BudgetMiddleware",
      'name': '',
      'type': 'address'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [],
    'name': "config",
    'outputs': [{
      'internalType': "contract Config",
      'name': '',
      'type': 'address'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "client",
      'type': 'address'
    }],
    'name': "emergencyRefund",
    'outputs': [{
      'internalType': "bool",
      'name': '',
      'type': 'bool'
    }],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "client",
      'type': "address"
    }, {
      'internalType': "uint256[]",
      'name': "randoms",
      'type': 'uint256[]'
    }],
    'name': "fill",
    'outputs': [{
      'components': [{
        'internalType': "uint128",
        'name': "escrow",
        'type': "uint128"
      }, {
        'internalType': 'uint128',
        'name': "payback",
        'type': 'uint128'
      }, {
        'internalType': 'uint128',
        'name': 'payout',
        'type': 'uint128'
      }, {
        'internalType': 'uint32',
        'name': 'delay',
        'type': 'uint32'
      }, {
        'internalType': "uint8",
        'name': "iterate",
        'type': "uint8"
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': "signal",
        'type': "uint8"
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': 'tuple'
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': "string",
            'name': "key",
            'type': 'string'
          }, {
            'internalType': "bytes",
            'name': 'value',
            'type': 'bytes'
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': "items",
          'type': 'tuple[]'
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': "list",
        'type': 'tuple'
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': 'address'
    }, {
      'internalType': 'address',
      'name': '',
      'type': 'address'
    }, {
      'internalType': "bytes",
      'name': 'data',
      'type': "bytes"
    }],
    'name': "finish",
    'outputs': [{
      'components': [{
        'internalType': "uint128",
        'name': "escrow",
        'type': 'uint128'
      }, {
        'internalType': "uint128",
        'name': 'payback',
        'type': 'uint128'
      }, {
        'internalType': 'uint128',
        'name': "payout",
        'type': 'uint128'
      }, {
        'internalType': 'uint32',
        'name': 'delay',
        'type': 'uint32'
      }, {
        'internalType': 'uint8',
        'name': "iterate",
        'type': "uint8"
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': "signal",
        'type': 'uint8'
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': 'tuple'
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': 'string',
            'name': "key",
            'type': "string"
          }, {
            'internalType': "bytes",
            'name': 'value',
            'type': "bytes"
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': "items",
          'type': 'tuple[]'
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': 'list',
        'type': "tuple"
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': '',
      'type': "address"
    }],
    'name': "games",
    'outputs': [{
      'internalType': "enum VideoPoker.Status",
      'name': 'status',
      'type': 'uint8'
    }, {
      'internalType': "uint32",
      'name': "cards",
      'type': "uint32"
    }, {
      'internalType': "uint32",
      'name': "change",
      'type': "uint32"
    }, {
      'internalType': "uint128",
      'name': 'wager',
      'type': "uint128"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [],
    'name': 'getPayouts',
    'outputs': [{
      'internalType': "uint8[9]",
      'name': 'payouts_',
      'type': 'uint8[9]'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "player",
      'type': 'address'
    }],
    'name': "getPlayerStatus",
    'outputs': [{
      'components': [{
        'internalType': "enum VideoPoker.Status",
        'name': 'status',
        'type': 'uint8'
      }, {
        'internalType': 'uint32',
        'name': "cards",
        'type': 'uint32'
      }, {
        'internalType': "uint32",
        'name': 'change',
        'type': 'uint32'
      }, {
        'internalType': "uint128",
        'name': 'wager',
        'type': 'uint128'
      }],
      'internalType': "struct VideoPoker.Game",
      'name': '',
      'type': "tuple"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [],
    'name': 'getType',
    'outputs': [{
      'internalType': 'string',
      'name': '',
      'type': 'string'
    }],
    'stateMutability': 'pure',
    'type': 'function'
  }, {
    'inputs': [],
    'name': "getVersion",
    'outputs': [{
      'internalType': 'uint16',
      'name': '',
      'type': 'uint16'
    }],
    'stateMutability': "pure",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': "address"
    }],
    'name': 'refund',
    'outputs': [{
      'internalType': 'bool',
      'name': '',
      'type': "bool"
    }],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'roleStore',
    'outputs': [{
      'internalType': "contract RoleStore",
      'name': '',
      'type': 'address'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "client",
      'type': "address"
    }, {
      'internalType': "address",
      'name': "bankroll",
      'type': 'address'
    }, {
      'internalType': "bytes",
      'name': "data",
      'type': 'bytes'
    }],
    'name': 'start',
    'outputs': [{
      'components': [{
        'internalType': "uint128",
        'name': "escrow",
        'type': "uint128"
      }, {
        'internalType': 'uint128',
        'name': 'payback',
        'type': 'uint128'
      }, {
        'internalType': 'uint128',
        'name': "payout",
        'type': "uint128"
      }, {
        'internalType': "uint32",
        'name': 'delay',
        'type': 'uint32'
      }, {
        'internalType': 'uint8',
        'name': "iterate",
        'type': 'uint8'
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': 'signal',
        'type': "uint8"
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': "tuple"
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': "string",
            'name': 'key',
            'type': 'string'
          }, {
            'internalType': "bytes",
            'name': 'value',
            'type': "bytes"
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': "items",
          'type': "tuple[]"
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': "list",
        'type': 'tuple'
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint8[9]",
      'name': '_payouts',
      'type': "uint8[9]"
    }],
    'name': 'updatePayouts',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': "cards",
      'type': 'uint256'
    }],
    'name': "win",
    'outputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': 'pure',
    'type': "function"
  }];
  export const ABI10 = [{
    'inputs': [{
      'internalType': "contract RoleStore",
      'name': '_roleStore',
      'type': 'address'
    }, {
      'internalType': "contract Config",
      'name': "_config",
      'type': 'address'
    }, {
      'internalType': "contract BudgetMiddleware",
      'name': "_budget",
      'type': "address"
    }],
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'client',
      'type': "address"
    }],
    'name': "AlreadyCompleted",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': 'uint16',
      'name': "index",
      'type': 'uint16'
    }],
    'name': "FirstIndexMustBeZero",
    'type': "error"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'client',
      'type': "address"
    }],
    'name': 'HasUncompletedGame',
    'type': "error"
  }, {
    'inputs': [{
      'internalType': "uint8",
      'name': 'index',
      'type': "uint8"
    }],
    'name': "InFreeSpin",
    'type': "error"
  }, {
    'inputs': [{
      'internalType': 'uint16',
      'name': 'index',
      'type': "uint16"
    }],
    'name': 'IndexOutOfBound',
    'type': "error"
  }, {
    'inputs': [{
      'internalType': "uint128",
      'name': 'given',
      'type': "uint128"
    }, {
      'internalType': 'uint128',
      'name': 'max',
      'type': "uint128"
    }],
    'name': "MaxWagerExceeded",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "client",
      'type': "address"
    }],
    'name': "NoFreeSpin",
    'type': "error"
  }, {
    'inputs': [{
      'internalType': "uint16",
      'name': "payout",
      'type': 'uint16'
    }],
    'name': "PayoutShouldGreaterThanZero",
    'type': "error"
  }, {
    'inputs': [],
    'name': 'ReentrancyGuardReentrantCall',
    'type': "error"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'msgSender',
      'type': "address"
    }, {
      'internalType': "string",
      'name': "role",
      'type': 'string'
    }],
    'name': "Unauthorized",
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': 'uint32',
      'name': 'sum',
      'type': "uint32"
    }],
    'name': "WeightSumIncorrect",
    'type': "error"
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': true,
      'internalType': 'address',
      'name': '_client',
      'type': "address"
    }, {
      'indexed': true,
      'internalType': 'uint256',
      'name': '_gameIndex',
      'type': "uint256"
    }, {
      'indexed': true,
      'internalType': 'address',
      'name': "_wagerAddress",
      'type': 'address'
    }, {
      'indexed': false,
      'internalType': 'uint256',
      'name': '_betAmount',
      'type': 'uint256'
    }],
    'name': "DoubleChanceSpinRefunded",
    'type': "event"
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': true,
      'internalType': 'address',
      'name': "_client",
      'type': "address"
    }, {
      'indexed': true,
      'internalType': "uint256",
      'name': "_gameIndex",
      'type': 'uint256'
    }, {
      'indexed': true,
      'internalType': "address",
      'name': "_wagerAddress",
      'type': "address"
    }, {
      'indexed': false,
      'internalType': 'uint256',
      'name': "_betAmount",
      'type': 'uint256'
    }],
    'name': 'FreeSpinRefunded',
    'type': "event"
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': true,
      'internalType': "address",
      'name': '_client',
      'type': 'address'
    }, {
      'indexed': true,
      'internalType': "uint256",
      'name': '_gameIndex',
      'type': "uint256"
    }, {
      'indexed': true,
      'internalType': 'address',
      'name': '_wagerAddress',
      'type': "address"
    }, {
      'indexed': false,
      'internalType': 'uint256',
      'name': "_betAmount",
      'type': 'uint256'
    }],
    'name': "NormalSpinRefunded",
    'type': 'event'
  }, {
    'inputs': [],
    'name': 'MULTIPLIER_MAX_WAGER_PACKAGE',
    'outputs': [{
      'internalType': "uint8",
      'name': '',
      'type': "uint8"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [],
    'name': "MULTIPLIER_MAX_WAGER_SINGLE",
    'outputs': [{
      'internalType': 'uint8',
      'name': '',
      'type': 'uint8'
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': "REEL_ROWS",
    'outputs': [{
      'internalType': "uint16",
      'name': '',
      'type': 'uint16'
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'client',
      'type': 'address'
    }, {
      'internalType': 'address',
      'name': "bankroll",
      'type': "address"
    }, {
      'internalType': "bytes",
      'name': 'data',
      'type': "bytes"
    }],
    'name': 'bet',
    'outputs': [{
      'components': [{
        'internalType': 'uint128',
        'name': "escrow",
        'type': "uint128"
      }, {
        'internalType': 'uint128',
        'name': 'payback',
        'type': "uint128"
      }, {
        'internalType': "uint128",
        'name': "payout",
        'type': "uint128"
      }, {
        'internalType': "uint32",
        'name': "delay",
        'type': "uint32"
      }, {
        'internalType': "uint8",
        'name': 'iterate',
        'type': "uint8"
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': 'signal',
        'type': "uint8"
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': "tuple"
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': "string",
            'name': 'key',
            'type': "string"
          }, {
            'internalType': 'bytes',
            'name': "value",
            'type': 'bytes'
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': "items",
          'type': "tuple[]"
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': "list",
        'type': "tuple"
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [],
    'name': "budget",
    'outputs': [{
      'internalType': "contract BudgetMiddleware",
      'name': '',
      'type': "address"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'client',
      'type': "address"
    }, {
      'internalType': 'address',
      'name': "bankroll",
      'type': 'address'
    }, {
      'internalType': "bytes",
      'name': "data",
      'type': "bytes"
    }],
    'name': 'buyFreeSpins',
    'outputs': [{
      'components': [{
        'internalType': "uint128",
        'name': "escrow",
        'type': 'uint128'
      }, {
        'internalType': "uint128",
        'name': 'payback',
        'type': "uint128"
      }, {
        'internalType': 'uint128',
        'name': "payout",
        'type': "uint128"
      }, {
        'internalType': "uint32",
        'name': "delay",
        'type': 'uint32'
      }, {
        'internalType': 'uint8',
        'name': "iterate",
        'type': "uint8"
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': "signal",
        'type': 'uint8'
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': 'tuple'
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': "string",
            'name': 'key',
            'type': 'string'
          }, {
            'internalType': 'bytes',
            'name': "value",
            'type': 'bytes'
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': 'items',
          'type': "tuple[]"
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': "list",
        'type': "tuple"
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': "tuple"
    }],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [],
    'name': 'config',
    'outputs': [{
      'internalType': "contract Config",
      'name': '',
      'type': 'address'
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': "doubleChanceDivisor",
    'outputs': [{
      'internalType': "uint8",
      'name': '',
      'type': 'uint8'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }, {
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'name': 'doubleChanceReelFreeSpinWeights',
    'outputs': [{
      'internalType': "uint16",
      'name': '',
      'type': 'uint16'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }, {
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }],
    'name': 'doubleChanceWeights',
    'outputs': [{
      'internalType': "uint16",
      'name': '',
      'type': "uint16"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'client',
      'type': "address"
    }],
    'name': 'emergencyRefund',
    'outputs': [{
      'internalType': 'bool',
      'name': '',
      'type': 'bool'
    }],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': 'address'
    }, {
      'internalType': 'uint256[]',
      'name': 'randoms',
      'type': 'uint256[]'
    }],
    'name': "fill",
    'outputs': [{
      'components': [{
        'internalType': "uint128",
        'name': 'escrow',
        'type': "uint128"
      }, {
        'internalType': 'uint128',
        'name': 'payback',
        'type': 'uint128'
      }, {
        'internalType': "uint128",
        'name': 'payout',
        'type': "uint128"
      }, {
        'internalType': "uint32",
        'name': "delay",
        'type': 'uint32'
      }, {
        'internalType': 'uint8',
        'name': 'iterate',
        'type': "uint8"
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': "signal",
        'type': "uint8"
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': "tuple"
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': "string",
            'name': "key",
            'type': 'string'
          }, {
            'internalType': 'bytes',
            'name': "value",
            'type': 'bytes'
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': 'items',
          'type': 'tuple[]'
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': "list",
        'type': "tuple"
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': "randomNumber",
      'type': 'uint256'
    }, {
      'internalType': 'uint16[12][6]',
      'name': 'weights',
      'type': "uint16[12][6]"
    }, {
      'internalType': 'uint16[30]',
      'name': "reel",
      'type': 'uint16[30]'
    }, {
      'internalType': 'uint16[6]',
      'name': "remaining",
      'type': 'uint16[6]'
    }],
    'name': 'fillReels',
    'outputs': [{
      'internalType': 'uint16[30]',
      'name': '',
      'type': 'uint16[30]'
    }, {
      'internalType': 'uint16[14]',
      'name': '',
      'type': "uint16[14]"
    }, {
      'internalType': "uint16[6]",
      'name': '',
      'type': 'uint16[6]'
    }, {
      'internalType': "bool",
      'name': '',
      'type': "bool"
    }],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': "randomNumber",
      'type': "uint256"
    }, {
      'internalType': 'uint16[30]',
      'name': 'reel',
      'type': "uint16[30]"
    }, {
      'internalType': 'uint8',
      'name': 'count',
      'type': 'uint8'
    }],
    'name': 'fillScatters',
    'outputs': [{
      'internalType': 'uint16[30]',
      'name': '',
      'type': "uint16[30]"
    }],
    'stateMutability': "pure",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': "address"
    }, {
      'internalType': 'address',
      'name': '',
      'type': "address"
    }, {
      'internalType': "bytes",
      'name': '',
      'type': 'bytes'
    }],
    'name': 'freeSpin',
    'outputs': [{
      'components': [{
        'internalType': "uint128",
        'name': 'escrow',
        'type': 'uint128'
      }, {
        'internalType': "uint128",
        'name': 'payback',
        'type': 'uint128'
      }, {
        'internalType': 'uint128',
        'name': 'payout',
        'type': "uint128"
      }, {
        'internalType': "uint32",
        'name': 'delay',
        'type': "uint32"
      }, {
        'internalType': 'uint8',
        'name': 'iterate',
        'type': "uint8"
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': "signal",
        'type': "uint8"
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': "tuple"
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': 'string',
            'name': 'key',
            'type': "string"
          }, {
            'internalType': "bytes",
            'name': 'value',
            'type': "bytes"
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': "items",
          'type': "tuple[]"
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': "list",
        'type': 'tuple'
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }, {
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }],
    'name': "freeSpinWeights",
    'outputs': [{
      'internalType': 'uint16',
      'name': '',
      'type': "uint16"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': 'a',
      'type': 'uint256'
    }, {
      'internalType': "uint256",
      'name': 'b',
      'type': 'uint256'
    }],
    'name': 'generateRandomNumber',
    'outputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': "pure",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': 'a',
      'type': 'uint256'
    }, {
      'internalType': 'uint256',
      'name': 'b',
      'type': "uint256"
    }, {
      'internalType': 'uint256',
      'name': 'c',
      'type': "uint256"
    }],
    'name': 'generateRandomNumber',
    'outputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': "pure",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint128",
      'name': 'wager',
      'type': "uint128"
    }],
    'name': "getDoubleChanceCost",
    'outputs': [{
      'internalType': 'uint256',
      'name': 'tokenAmount_',
      'type': 'uint256'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [],
    'name': 'getDoubleChanceReelFreeSpinWeights',
    'outputs': [{
      'internalType': 'uint16[12][6]',
      'name': '',
      'type': "uint16[12][6]"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': "getDoubleChanceWeights",
    'outputs': [{
      'internalType': 'uint16[12][6]',
      'name': '',
      'type': "uint16[12][6]"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint128',
      'name': 'wager',
      'type': "uint128"
    }],
    'name': "getFreeSpinTokenAmount",
    'outputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': "pure",
    'type': 'function'
  }, {
    'inputs': [],
    'name': "getFreeSpinWeights",
    'outputs': [{
      'internalType': 'uint16[12][6]',
      'name': '',
      'type': "uint16[12][6]"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': "getInitialFreeSpinWeights",
    'outputs': [{
      'internalType': "uint16[12][6]",
      'name': '',
      'type': 'uint16[12][6]'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [],
    'name': "getMultiplierWeights",
    'outputs': [{
      'internalType': "uint16[14]",
      'name': '',
      'type': "uint16[14]"
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [],
    'name': "getNormalReelFreeSpinWeights",
    'outputs': [{
      'internalType': "uint16[12][6]",
      'name': '',
      'type': "uint16[12][6]"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [],
    'name': 'getNormalSpinWeights',
    'outputs': [{
      'internalType': 'uint16[12][6]',
      'name': '',
      'type': 'uint16[12][6]'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [],
    'name': 'getPayoutEightOrMore',
    'outputs': [{
      'internalType': "uint16[10]",
      'name': '',
      'type': 'uint16[10]'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [],
    'name': "getPayoutTenOrMore",
    'outputs': [{
      'internalType': 'uint16[10]',
      'name': '',
      'type': "uint16[10]"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': "getPayoutTwelveOrMore",
    'outputs': [{
      'internalType': 'uint16[10]',
      'name': '',
      'type': "uint16[10]"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'client',
      'type': 'address'
    }],
    'name': "getPlayerStatus",
    'outputs': [{
      'components': [{
        'internalType': 'uint8',
        'name': "freeSpinCount",
        'type': "uint8"
      }, {
        'internalType': "uint128",
        'name': "wager",
        'type': 'uint128'
      }, {
        'internalType': 'uint32',
        'name': "bufferedFreeSpinWinnings",
        'type': "uint32"
      }, {
        'internalType': "enum IWinrBonanza.SpinType",
        'name': "spinType",
        'type': "uint8"
      }, {
        'internalType': "enum IWinrBonanza.State",
        'name': "state",
        'type': "uint8"
      }],
      'internalType': "struct IWinrBonanza.Game",
      'name': '',
      'type': "tuple"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint16',
      'name': "symbol",
      'type': 'uint16'
    }],
    'name': 'getSymbolName',
    'outputs': [{
      'internalType': 'string',
      'name': '',
      'type': 'string'
    }],
    'stateMutability': "pure",
    'type': "function"
  }, {
    'inputs': [],
    'name': "getType",
    'outputs': [{
      'internalType': "string",
      'name': '',
      'type': 'string'
    }],
    'stateMutability': 'pure',
    'type': "function"
  }, {
    'inputs': [],
    'name': 'getVersion',
    'outputs': [{
      'internalType': "uint16",
      'name': '',
      'type': "uint16"
    }],
    'stateMutability': 'pure',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "enum IWinrBonanza.SpinType",
      'name': "spinType",
      'type': "uint8"
    }],
    'name': 'getWeights',
    'outputs': [{
      'internalType': "uint16[12][6]",
      'name': '',
      'type': "uint16[12][6]"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }, {
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }],
    'name': 'initialFreeSpinWeights',
    'outputs': [{
      'internalType': 'uint16',
      'name': '',
      'type': "uint16"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }, {
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }],
    'name': "normalReelFreeSpinWeights",
    'outputs': [{
      'internalType': "uint16",
      'name': '',
      'type': "uint16"
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }, {
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }],
    'name': 'normalSpinWeights',
    'outputs': [{
      'internalType': "uint16",
      'name': '',
      'type': 'uint16'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': "randomNumber",
      'type': 'uint256'
    }, {
      'internalType': "uint16[12][6]",
      'name': "weights",
      'type': 'uint16[12][6]'
    }, {
      'internalType': "uint16[30]",
      'name': "reel",
      'type': "uint16[30]"
    }, {
      'internalType': "uint16[6]",
      'name': "remaining",
      'type': "uint16[6]"
    }, {
      'internalType': 'uint32',
      'name': 'payoutMultiplier',
      'type': 'uint32'
    }, {
      'internalType': "uint8",
      'name': 'turn',
      'type': 'uint8'
    }],
    'name': "processReel",
    'outputs': [{
      'internalType': "uint16[30]",
      'name': '',
      'type': 'uint16[30]'
    }, {
      'internalType': 'uint8',
      'name': '',
      'type': "uint8"
    }, {
      'internalType': "uint32",
      'name': '',
      'type': 'uint32'
    }, {
      'internalType': "uint16",
      'name': '',
      'type': "uint16"
    }],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': "address"
    }],
    'name': "refund",
    'outputs': [{
      'internalType': 'bool',
      'name': '',
      'type': "bool"
    }],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint16',
      'name': 'scatter',
      'type': 'uint16'
    }],
    'name': 'returnScatterMultiplier',
    'outputs': [{
      'internalType': 'uint16',
      'name': '',
      'type': 'uint16'
    }],
    'stateMutability': 'pure',
    'type': "function"
  }, {
    'inputs': [],
    'name': "roleStore",
    'outputs': [{
      'internalType': "contract RoleStore",
      'name': '',
      'type': "address"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint16[30]',
      'name': 'grid',
      'type': 'uint16[30]'
    }, {
      'internalType': "uint16[14]",
      'name': 'symbolCounts',
      'type': 'uint16[14]'
    }],
    'name': "seekAndDestroy",
    'outputs': [{
      'internalType': "uint16[30]",
      'name': '',
      'type': 'uint16[30]'
    }],
    'stateMutability': "pure",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint8',
      'name': "divisor",
      'type': "uint8"
    }],
    'name': "setDoubleChanceDivisor",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint16',
      'name': 'index',
      'type': "uint16"
    }, {
      'internalType': "uint16[12]",
      'name': 'weights',
      'type': 'uint16[12]'
    }],
    'name': "setDoubleChanceReelFreeSpinWeights",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint16',
      'name': "index",
      'type': 'uint16'
    }, {
      'internalType': "uint16[12]",
      'name': "weights",
      'type': "uint16[12]"
    }],
    'name': "setDoubleChanceWeights",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint16",
      'name': "index",
      'type': "uint16"
    }, {
      'internalType': 'uint16[12]',
      'name': 'weights',
      'type': 'uint16[12]'
    }],
    'name': 'setFreeSpinWeights',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint16',
      'name': 'index',
      'type': "uint16"
    }, {
      'internalType': "uint16[12]",
      'name': 'weights',
      'type': 'uint16[12]'
    }],
    'name': "setInitialFreeSpinWeights",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint16[14]",
      'name': "_multiplierWeights",
      'type': 'uint16[14]'
    }],
    'name': "setMultiplierWeights",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint16',
      'name': "index",
      'type': "uint16"
    }, {
      'internalType': "uint16[12]",
      'name': 'weights',
      'type': 'uint16[12]'
    }],
    'name': "setNormalReelFreeSpinWeight",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint16',
      'name': "index",
      'type': 'uint16'
    }, {
      'internalType': 'uint16[12]',
      'name': "weights",
      'type': "uint16[12]"
    }],
    'name': 'setNormalSpinWeight',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint16[10]',
      'name': "payouts",
      'type': "uint16[10]"
    }],
    'name': 'setPayoutEightOrMore',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint16[10]",
      'name': 'payouts',
      'type': 'uint16[10]'
    }],
    'name': 'setPayoutTenOrMore',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint16[10]',
      'name': "payouts",
      'type': "uint16[10]"
    }],
    'name': 'setPayoutTwelveOrMore',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }];
  export const ABI11 = [{
    'inputs': [{
      'internalType': "contract RoleStore",
      'name': "_roleStore",
      'type': 'address'
    }, {
      'internalType': "contract Config",
      'name': "_config",
      'type': 'address'
    }, {
      'internalType': "contract BudgetMiddleware",
      'name': "_budget",
      'type': 'address'
    }],
    'stateMutability': 'nonpayable',
    'type': "constructor"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'client',
      'type': "address"
    }],
    'name': 'AlreadyCompleted',
    'type': "error"
  }, {
    'inputs': [{
      'internalType': 'uint16',
      'name': 'index',
      'type': "uint16"
    }],
    'name': 'FirstIndexMustBeZero',
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'client',
      'type': 'address'
    }],
    'name': 'HasUncompletedGame',
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': 'uint8',
      'name': "index",
      'type': 'uint8'
    }],
    'name': 'InFreeSpin',
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "uint16",
      'name': 'index',
      'type': 'uint16'
    }],
    'name': "IndexOutOfBound",
    'type': "error"
  }, {
    'inputs': [{
      'internalType': 'uint128',
      'name': 'given',
      'type': "uint128"
    }, {
      'internalType': "uint128",
      'name': "max",
      'type': "uint128"
    }],
    'name': 'MaxWagerExceeded',
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "client",
      'type': "address"
    }],
    'name': 'NoFreeSpin',
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "uint16",
      'name': "payout",
      'type': 'uint16'
    }],
    'name': 'PayoutShouldGreaterThanZero',
    'type': 'error'
  }, {
    'inputs': [],
    'name': "ReentrancyGuardReentrantCall",
    'type': "error"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "msgSender",
      'type': "address"
    }, {
      'internalType': 'string',
      'name': "role",
      'type': "string"
    }],
    'name': 'Unauthorized',
    'type': 'error'
  }, {
    'inputs': [{
      'internalType': "uint32",
      'name': "sum",
      'type': "uint32"
    }],
    'name': 'WeightSumIncorrect',
    'type': 'error'
  }, {
    'inputs': [],
    'name': 'MULTIPLIER_MAX_WAGER_PACKAGE',
    'outputs': [{
      'internalType': "uint8",
      'name': '',
      'type': 'uint8'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [],
    'name': 'REEL_ROWS',
    'outputs': [{
      'internalType': "uint16",
      'name': '',
      'type': "uint16"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': "address"
    }, {
      'internalType': "address",
      'name': 'bankroll',
      'type': 'address'
    }, {
      'internalType': 'bytes',
      'name': "data",
      'type': "bytes"
    }],
    'name': 'bet',
    'outputs': [{
      'components': [{
        'internalType': "uint128",
        'name': 'escrow',
        'type': "uint128"
      }, {
        'internalType': 'uint128',
        'name': 'payback',
        'type': "uint128"
      }, {
        'internalType': 'uint128',
        'name': "payout",
        'type': "uint128"
      }, {
        'internalType': "uint32",
        'name': 'delay',
        'type': "uint32"
      }, {
        'internalType': "uint8",
        'name': 'iterate',
        'type': 'uint8'
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': "signal",
        'type': "uint8"
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': 'tuple'
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': 'string',
            'name': 'key',
            'type': 'string'
          }, {
            'internalType': 'bytes',
            'name': "value",
            'type': "bytes"
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': "items",
          'type': "tuple[]"
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': "list",
        'type': 'tuple'
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': "tuple"
    }],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [],
    'name': "budget",
    'outputs': [{
      'internalType': "contract BudgetMiddleware",
      'name': '',
      'type': 'address'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'client',
      'type': "address"
    }, {
      'internalType': "address",
      'name': 'bankroll',
      'type': "address"
    }, {
      'internalType': "bytes",
      'name': 'data',
      'type': 'bytes'
    }],
    'name': 'buyFreeSpins',
    'outputs': [{
      'components': [{
        'internalType': "uint128",
        'name': "escrow",
        'type': "uint128"
      }, {
        'internalType': "uint128",
        'name': 'payback',
        'type': "uint128"
      }, {
        'internalType': "uint128",
        'name': "payout",
        'type': 'uint128'
      }, {
        'internalType': "uint32",
        'name': "delay",
        'type': "uint32"
      }, {
        'internalType': "uint8",
        'name': "iterate",
        'type': 'uint8'
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': 'signal',
        'type': "uint8"
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': 'tuple'
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': "string",
            'name': 'key',
            'type': 'string'
          }, {
            'internalType': "bytes",
            'name': "value",
            'type': 'bytes'
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': "items",
          'type': 'tuple[]'
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': "list",
        'type': 'tuple'
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [],
    'name': "config",
    'outputs': [{
      'internalType': "contract Config",
      'name': '',
      'type': 'address'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [],
    'name': 'doubleChanceDivisor',
    'outputs': [{
      'internalType': 'uint8',
      'name': '',
      'type': 'uint8'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }, {
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'name': 'doubleChanceReelFreeSpinWeights',
    'outputs': [{
      'internalType': 'uint16',
      'name': '',
      'type': "uint16"
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }, {
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }],
    'name': "doubleChanceWeights",
    'outputs': [{
      'internalType': "uint16",
      'name': '',
      'type': 'uint16'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "client",
      'type': "address"
    }],
    'name': "emergencyRefund",
    'outputs': [{
      'internalType': 'bool',
      'name': '',
      'type': "bool"
    }],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': "address"
    }, {
      'internalType': 'uint256[]',
      'name': "randoms",
      'type': "uint256[]"
    }],
    'name': "fill",
    'outputs': [{
      'components': [{
        'internalType': 'uint128',
        'name': "escrow",
        'type': "uint128"
      }, {
        'internalType': 'uint128',
        'name': 'payback',
        'type': "uint128"
      }, {
        'internalType': 'uint128',
        'name': 'payout',
        'type': 'uint128'
      }, {
        'internalType': 'uint32',
        'name': "delay",
        'type': 'uint32'
      }, {
        'internalType': 'uint8',
        'name': 'iterate',
        'type': "uint8"
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': "signal",
        'type': 'uint8'
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': 'tuple'
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': "string",
            'name': "key",
            'type': "string"
          }, {
            'internalType': "bytes",
            'name': 'value',
            'type': "bytes"
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': 'items',
          'type': "tuple[]"
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': "list",
        'type': 'tuple'
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': "tuple"
    }],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': "randomNumber",
      'type': 'uint256'
    }, {
      'internalType': 'uint16[12][6]',
      'name': 'weights',
      'type': 'uint16[12][6]'
    }, {
      'internalType': "uint16[30]",
      'name': 'reel',
      'type': 'uint16[30]'
    }, {
      'internalType': "uint16[6]",
      'name': "remaining",
      'type': "uint16[6]"
    }],
    'name': "fillReels",
    'outputs': [{
      'internalType': "uint16[30]",
      'name': '',
      'type': 'uint16[30]'
    }, {
      'internalType': "uint16[14]",
      'name': '',
      'type': 'uint16[14]'
    }, {
      'internalType': "uint16[6]",
      'name': '',
      'type': 'uint16[6]'
    }, {
      'internalType': 'bool',
      'name': '',
      'type': 'bool'
    }],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': "randomNumber",
      'type': 'uint256'
    }, {
      'internalType': 'uint16[30]',
      'name': "reel",
      'type': "uint16[30]"
    }, {
      'internalType': "uint8",
      'name': "count",
      'type': "uint8"
    }],
    'name': 'fillScatters',
    'outputs': [{
      'internalType': "uint16[30]",
      'name': '',
      'type': 'uint16[30]'
    }],
    'stateMutability': "pure",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'client',
      'type': 'address'
    }, {
      'internalType': 'address',
      'name': '',
      'type': "address"
    }, {
      'internalType': 'bytes',
      'name': '',
      'type': "bytes"
    }],
    'name': 'freeSpin',
    'outputs': [{
      'components': [{
        'internalType': 'uint128',
        'name': "escrow",
        'type': "uint128"
      }, {
        'internalType': "uint128",
        'name': "payback",
        'type': 'uint128'
      }, {
        'internalType': "uint128",
        'name': "payout",
        'type': "uint128"
      }, {
        'internalType': "uint32",
        'name': 'delay',
        'type': 'uint32'
      }, {
        'internalType': 'uint8',
        'name': "iterate",
        'type': "uint8"
      }, {
        'internalType': "enum ControllerUtils.Signal",
        'name': 'signal',
        'type': "uint8"
      }],
      'internalType': "struct ControllerUtils.Response",
      'name': '',
      'type': 'tuple'
    }, {
      'components': [{
        'components': [{
          'components': [{
            'internalType': "string",
            'name': 'key',
            'type': 'string'
          }, {
            'internalType': "bytes",
            'name': "value",
            'type': "bytes"
          }],
          'internalType': "struct EventUtils.BytesKeyValue[]",
          'name': 'items',
          'type': "tuple[]"
        }],
        'internalType': "struct EventUtils.BytesItems",
        'name': "list",
        'type': "tuple"
      }],
      'internalType': "struct EventUtils.Log",
      'name': '',
      'type': 'tuple'
    }],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }, {
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }],
    'name': "freeSpinWeights",
    'outputs': [{
      'internalType': "uint16",
      'name': '',
      'type': "uint16"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': 'a',
      'type': "uint256"
    }, {
      'internalType': "uint256",
      'name': 'b',
      'type': "uint256"
    }],
    'name': "generateRandomNumber",
    'outputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': "pure",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': 'a',
      'type': 'uint256'
    }, {
      'internalType': "uint256",
      'name': 'b',
      'type': "uint256"
    }, {
      'internalType': "uint256",
      'name': 'c',
      'type': 'uint256'
    }],
    'name': 'generateRandomNumber',
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }],
    'stateMutability': "pure",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint128',
      'name': 'wager',
      'type': 'uint128'
    }],
    'name': 'getDoubleChanceCost',
    'outputs': [{
      'internalType': 'uint256',
      'name': "tokenAmount_",
      'type': 'uint256'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [],
    'name': "getDoubleChanceReelFreeSpinWeights",
    'outputs': [{
      'internalType': "uint16[12][6]",
      'name': '',
      'type': "uint16[12][6]"
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'getDoubleChanceWeights',
    'outputs': [{
      'internalType': 'uint16[12][6]',
      'name': '',
      'type': "uint16[12][6]"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint128",
      'name': "wager",
      'type': 'uint128'
    }],
    'name': "getFreeSpinTokenAmount",
    'outputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': 'pure',
    'type': 'function'
  }, {
    'inputs': [],
    'name': "getFreeSpinWeights",
    'outputs': [{
      'internalType': "uint16[12][6]",
      'name': '',
      'type': 'uint16[12][6]'
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'getInitialFreeSpinWeights',
    'outputs': [{
      'internalType': "uint16[12][6]",
      'name': '',
      'type': 'uint16[12][6]'
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [],
    'name': "getMultiplierWeights",
    'outputs': [{
      'internalType': "uint16[15]",
      'name': '',
      'type': "uint16[15]"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': "getNormalReelFreeSpinWeights",
    'outputs': [{
      'internalType': "uint16[12][6]",
      'name': '',
      'type': 'uint16[12][6]'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [],
    'name': "getNormalSpinWeights",
    'outputs': [{
      'internalType': 'uint16[12][6]',
      'name': '',
      'type': "uint16[12][6]"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [],
    'name': "getPayoutEightOrMore",
    'outputs': [{
      'internalType': 'uint16[10]',
      'name': '',
      'type': 'uint16[10]'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'getPayoutTenOrMore',
    'outputs': [{
      'internalType': 'uint16[10]',
      'name': '',
      'type': 'uint16[10]'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [],
    'name': "getPayoutTwelveOrMore",
    'outputs': [{
      'internalType': "uint16[10]",
      'name': '',
      'type': "uint16[10]"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "client",
      'type': 'address'
    }],
    'name': "getPlayerStatus",
    'outputs': [{
      'components': [{
        'internalType': 'uint8',
        'name': "freeSpinCount",
        'type': "uint8"
      }, {
        'internalType': 'uint128',
        'name': 'wager',
        'type': 'uint128'
      }, {
        'internalType': "uint32",
        'name': "bufferedFreeSpinWinnings",
        'type': "uint32"
      }, {
        'internalType': "uint32",
        'name': 'multiplier',
        'type': "uint32"
      }, {
        'internalType': "enum IGateOfOlympos.SpinType",
        'name': 'spinType',
        'type': 'uint8'
      }, {
        'internalType': "enum IGateOfOlympos.State",
        'name': 'state',
        'type': "uint8"
      }],
      'internalType': "struct IGateOfOlympos.Game",
      'name': '',
      'type': "tuple"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint16',
      'name': 'symbol',
      'type': "uint16"
    }],
    'name': 'getSymbolName',
    'outputs': [{
      'internalType': "string",
      'name': '',
      'type': 'string'
    }],
    'stateMutability': "pure",
    'type': "function"
  }, {
    'inputs': [],
    'name': 'getType',
    'outputs': [{
      'internalType': 'string',
      'name': '',
      'type': 'string'
    }],
    'stateMutability': "pure",
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'getVersion',
    'outputs': [{
      'internalType': 'uint16',
      'name': '',
      'type': 'uint16'
    }],
    'stateMutability': "pure",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "enum IGateOfOlympos.SpinType",
      'name': "spinType",
      'type': "uint8"
    }],
    'name': 'getWeights',
    'outputs': [{
      'internalType': "uint16[12][6]",
      'name': '',
      'type': 'uint16[12][6]'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }, {
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }],
    'name': 'initialFreeSpinWeights',
    'outputs': [{
      'internalType': "uint16",
      'name': '',
      'type': "uint16"
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'maxWagerMultiplier',
    'outputs': [{
      'internalType': "uint128",
      'name': '',
      'type': "uint128"
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }, {
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'name': 'normalReelFreeSpinWeights',
    'outputs': [{
      'internalType': "uint16",
      'name': '',
      'type': 'uint16'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }, {
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }],
    'name': "normalSpinWeights",
    'outputs': [{
      'internalType': "uint16",
      'name': '',
      'type': 'uint16'
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': "randomNumber",
      'type': 'uint256'
    }, {
      'internalType': "uint16[12][6]",
      'name': "weights",
      'type': 'uint16[12][6]'
    }, {
      'internalType': 'uint16[30]',
      'name': "reel",
      'type': 'uint16[30]'
    }, {
      'internalType': "uint16[6]",
      'name': "remaining",
      'type': "uint16[6]"
    }, {
      'internalType': "uint32",
      'name': 'multiplier',
      'type': 'uint32'
    }, {
      'internalType': "uint32",
      'name': 'payoutMultiplier',
      'type': "uint32"
    }, {
      'internalType': "uint8",
      'name': "turn",
      'type': "uint8"
    }],
    'name': 'processReel',
    'outputs': [{
      'internalType': "uint16[30]",
      'name': '',
      'type': "uint16[30]"
    }, {
      'internalType': "uint8",
      'name': '',
      'type': 'uint8'
    }, {
      'internalType': 'uint32',
      'name': '',
      'type': 'uint32'
    }, {
      'internalType': 'uint16',
      'name': '',
      'type': 'uint16'
    }, {
      'internalType': "uint16",
      'name': '',
      'type': 'uint16'
    }],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'client',
      'type': 'address'
    }],
    'name': 'refund',
    'outputs': [{
      'internalType': "bool",
      'name': '',
      'type': "bool"
    }],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint16',
      'name': 'scatter',
      'type': 'uint16'
    }],
    'name': "returnScatterMultiplier",
    'outputs': [{
      'internalType': "uint16",
      'name': '',
      'type': "uint16"
    }],
    'stateMutability': 'pure',
    'type': "function"
  }, {
    'inputs': [],
    'name': "roleStore",
    'outputs': [{
      'internalType': "contract RoleStore",
      'name': '',
      'type': "address"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint16[30]',
      'name': 'grid',
      'type': 'uint16[30]'
    }, {
      'internalType': "uint16[14]",
      'name': "symbolCounts",
      'type': 'uint16[14]'
    }],
    'name': 'seekAndDestroy',
    'outputs': [{
      'internalType': "uint16[30]",
      'name': '',
      'type': 'uint16[30]'
    }],
    'stateMutability': 'pure',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint8',
      'name': "divisor",
      'type': "uint8"
    }],
    'name': "setDoubleChanceDivisor",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint16",
      'name': 'index',
      'type': "uint16"
    }, {
      'internalType': 'uint16[12]',
      'name': "weights",
      'type': 'uint16[12]'
    }],
    'name': 'setDoubleChanceReelFreeSpinWeights',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint16",
      'name': 'index',
      'type': 'uint16'
    }, {
      'internalType': "uint16[12]",
      'name': 'weights',
      'type': "uint16[12]"
    }],
    'name': "setDoubleChanceWeights",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint16",
      'name': 'index',
      'type': 'uint16'
    }, {
      'internalType': "uint16[12]",
      'name': 'weights',
      'type': 'uint16[12]'
    }],
    'name': "setFreeSpinWeights",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint16',
      'name': "index",
      'type': "uint16"
    }, {
      'internalType': 'uint16[12]',
      'name': "weights",
      'type': 'uint16[12]'
    }],
    'name': "setInitialFreeSpinWeights",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint128',
      'name': '_maxWagerMultiplier',
      'type': 'uint128'
    }],
    'name': "setMaxWagerMultiplier",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint16[15]",
      'name': "_multiplierWeights",
      'type': 'uint16[15]'
    }],
    'name': 'setMultiplierWeights',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint16',
      'name': 'index',
      'type': 'uint16'
    }, {
      'internalType': "uint16[12]",
      'name': 'weights',
      'type': 'uint16[12]'
    }],
    'name': "setNormalReelFreeSpinWeight",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'uint16',
      'name': "index",
      'type': "uint16"
    }, {
      'internalType': 'uint16[12]',
      'name': 'weights',
      'type': "uint16[12]"
    }],
    'name': 'setNormalSpinWeight',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint16[10]",
      'name': 'payouts',
      'type': 'uint16[10]'
    }],
    'name': 'setPayoutEightOrMore',
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "uint16[10]",
      'name': 'payouts',
      'type': "uint16[10]"
    }],
    'name': "setPayoutTenOrMore",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'uint16[10]',
      'name': 'payouts',
      'type': 'uint16[10]'
    }],
    'name': "setPayoutTwelveOrMore",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }];
  export const ABI12 = [{
    'anonymous': false,
    'inputs': [{
      'indexed': true,
      'internalType': "address",
      'name': "src",
      'type': 'address'
    }, {
      'indexed': true,
      'internalType': 'address',
      'name': 'guy',
      'type': "address"
    }, {
      'indexed': false,
      'internalType': "uint256",
      'name': 'wad',
      'type': "uint256"
    }],
    'name': "Approval",
    'type': "event"
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': true,
      'internalType': "address",
      'name': 'dst',
      'type': "address"
    }, {
      'indexed': false,
      'internalType': "uint256",
      'name': "wad",
      'type': "uint256"
    }],
    'name': "Deposit",
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': true,
      'internalType': "address",
      'name': 'src',
      'type': "address"
    }, {
      'indexed': true,
      'internalType': 'address',
      'name': 'dst',
      'type': "address"
    }, {
      'indexed': false,
      'internalType': "uint256",
      'name': "wad",
      'type': 'uint256'
    }],
    'name': 'Transfer',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': true,
      'internalType': "address",
      'name': 'src',
      'type': "address"
    }, {
      'indexed': false,
      'internalType': 'uint256',
      'name': "wad",
      'type': "uint256"
    }],
    'name': "Withdrawal",
    'type': "event"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': '',
      'type': 'address'
    }, {
      'internalType': 'address',
      'name': '',
      'type': "address"
    }],
    'name': "allowance",
    'outputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'guy',
      'type': "address"
    }, {
      'internalType': 'uint256',
      'name': "wad",
      'type': "uint256"
    }],
    'name': "approve",
    'outputs': [{
      'internalType': "bool",
      'name': '',
      'type': "bool"
    }],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': '',
      'type': 'address'
    }],
    'name': 'balanceOf',
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }],
    'stateMutability': 'view',
    'type': "function"
  }, {
    'inputs': [],
    'name': "decimals",
    'outputs': [{
      'internalType': "uint8",
      'name': '',
      'type': "uint8"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'deposit',
    'outputs': [],
    'stateMutability': "payable",
    'type': "function"
  }, {
    'inputs': [],
    'name': "name",
    'outputs': [{
      'internalType': "string",
      'name': '',
      'type': "string"
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'symbol',
    'outputs': [{
      'internalType': "string",
      'name': '',
      'type': 'string'
    }],
    'stateMutability': "view",
    'type': 'function'
  }, {
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }],
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': 'dst',
      'type': 'address'
    }, {
      'internalType': "uint256",
      'name': 'wad',
      'type': "uint256"
    }],
    'name': 'transfer',
    'outputs': [{
      'internalType': "bool",
      'name': '',
      'type': "bool"
    }],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': 'src',
      'type': "address"
    }, {
      'internalType': 'address',
      'name': 'dst',
      'type': "address"
    }, {
      'internalType': "uint256",
      'name': 'wad',
      'type': "uint256"
    }],
    'name': 'transferFrom',
    'outputs': [{
      'internalType': 'bool',
      'name': '',
      'type': 'bool'
    }],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "uint256",
      'name': "wad",
      'type': "uint256"
    }],
    'name': 'withdraw',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'stateMutability': "payable",
    'type': "receive"
  }];
  export const SONICLABSABI = [ABI1, ABI2, ABI3, ABI4, ABI5, ABI6, ABI7, ABI8, ABI9, ABI10, ABI11, ABI12];