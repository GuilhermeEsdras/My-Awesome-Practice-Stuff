# tem uma falha gravíssima nesse programa, se vc encontrar, consegue minhas respostas em pp :)
from cryptography.fernet import Fernet
import base64
import sys, os as s
from getpass import getpass
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
ky, ke = chr(121), ord('e')
arg = sys.argv[1]
ps_in = getpass("senha: ")
ps = bytes(ps_in, 'utf-8')
w1 = ('k' + chr(ke) + ky)
w2 = chr(99) + chr(104) + chr(97) + chr(118) + chr(101)
salt = b'oP\xb5\x05R\xe1\xf2\xafW\x12\xf5\xa8R\xca\xd57'
kdf = PBKDF2HMAC(
    algorithm=hashes.SHA256(),
    length=32,
    salt=salt,
    iterations=100000,
    backend=default_backend()
)
meu_ps = base64.urlsafe_b64encode(kdf.derive(ps))
try:
    fl = open('{}.{}'.format(w2, w1), 'rb')
except:
    print('vixe...')
    exit()
ca = 'The Huxley/pp/'
k = fl.read()
fl.close()
if meu_ps == k:
    frnt = Fernet(k)
    n = 'crypto'
    with s.scandir(ca) as fls:
        for a in fls:
            dename = a.name.split('.')
            with open(a, 'rb') as f:
                dt = f.read()
                print(f'lndo: \'{a.name}\'')
            o_super_cao = frnt.decrypt(dt) if arg == '-out' else frnt.encrypt(dt)
            if (arg != '-out' and len(dename) > 2) or (arg != '-in' and len(dename) <= 2):
                print(f'nada pro cão fazer nesse arquivo ({a.name})...')
            else:
                dename = a.name.split('.')
                nilname = '{}{}.{}'.format(ca, a.name, n) if arg != '-out' else '{}{}.{}'.format(ca, dename[0], dename[1])
                with open(nilname, 'wb') as f:
                    f.write(o_super_cao)
                    print(f'agndo: \'{nilname}\'')
            s.remove(a)
else:
    print('senha errada patrão kksk')