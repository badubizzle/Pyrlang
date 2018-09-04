Pyrlang - Erlang node in Python
===============================

This is a drop-in Erlang node implementation in Python 3.5, designed to allow
interoperation between existing Python projects and BEAM languages: Erlang, 
Elixir, Alpaca, Luaerl, LFE, Clojerl and such. 

With just a few lines of startup code your Python program becomes an Erlang 
network node, participating in the Erlang cluster.
 
 
Documentation
-------------

http://pyrlang.readthedocs.io/en/latest/


Features
--------

*   Requires Python 3.5 due to type hints, in theory could work on Python 2 and 
    Gevent, but currently no work is done to ensure Python 2 compatibility
*   Supports switchable backends: Gevent and Asyncio - see examples.
*   Erlang distribution protocol for Erlang versions 19, 20, and 21
*   Registry of Python 'processes', which are asyncronous tasks, have a pid
    and an optional registered name
*   User can inherit from `Pyrlang.Process` to create simple process-like Python 
    objects which can receive messages, be linked and monitored from Erlang
*   Send and receive messages locally and remotely by pid or name
*   Supports `net_adm` pings
*   Supports RPC calls. An RPC call can propagate an exception from 
    Python to Erlang;
*   `Pyrlang.gen` module helps decode `gen_server`-style calls (you still have
    to handle the value yourself). See `example10` (Elixir) for a 
    `gen_server:call` implementation.


| Erlang               | Python                              | Notes                                                                                 |
|----------------------|-------------------------------------|---------------------------------------------------------------------------------------|
| Atom                 | `Pyrlang.Atom`                      | Can use `str()` or access `text_` field directly. Can decode UTF-8 atoms too          |
| Float                | Python `float`                      |                                                                                       |
| Integer (small, big) | Python `integer`                    | Python is capable if big integers too                                                 |
| List (well formed)   | Python `list`                       | Use helper functions in `Pyrlang.Term.list` module to convert to string               |
| List (improper)      | `tuple` (`list`, `Pyrlang.AnyTerm`) | A tuple with list and the tail element of the improper list                           |
|                      |                                     | Sending an improper list to Erlang requires use of `Pyrlang.ImproperList` helper      |         
| String               | Python `list`                       | Use helper functions in `Pyrlang.Term.list` module to convert to string               |
| ASCII or UTF8 String or List of bytes | Python `bytes`     | If string contained only ASCII or UTF8, bytes will arrive                             | 
| Tuple                | Python `tuple`                      |                                                                                       |
| Map                  | Python `dict`                       |                                                                                       |
| Binary               | Python `bytes`                      |                                                                                       |
| Bitstring            | `tuple` (`bytes`, `int`)            | A tuple of bytes and `last_byte_bits:int` defining incomplete last byte               |
|                      |                                     | Sending a bitstring to Erlang requires use of `Pyrlang.BitString` helper              |
| Pid                  | `Pyrlang.Pid`                       | Always long external Pids with a node name in them                                    |
| Reference            | `Pyrlang.Reference`                 | Always long external Refs with a node name in them                                    |
| Lambda (fun)         | `Pyrlang.Fun`                       | A class which holds parsed fun fields, not usable or useful in Python                 |
|                      | Any other object                    | Any unknown Python object will be encoded as {'Classname', #{field1 => value1...}}    |


Building
--------

Install requirements via: `pip3 install -r requirements.txt`, this will also
pull requirements for Sphinx documentation generator (not needed if you only
use the library).

To operate Pyrlang only requires `gevent` and `greenlet` (dependency of 
`gevent`) OR `asyncio`.
NOTE: type specs in Pyrlang code require Python 3.5 so it will not
really work on Python 2. 

Source for the documentation is in the `docs/` directory. It uses `sphinx`
documentation generator. To generate: run `make docs` or in `docs/` directory
you can run `make` to see other output formats.


Examples
--------

Running `make example1` will run a simple test which starts a node at `py@127.0.0.1`.
See top comment in `examples/01_simple_node.py`.

Running `make example2` will create a `MyProcess` Python class inherited from
`Process`, register self under a name and await for message from a connected
Erlang node (see top comment in `examples/02_registered_process.py`) 

Running `make example10a` and `make example10b` in two console tabs will start
a Python `gen_server`-like process and Elixir client will do a call to it.
