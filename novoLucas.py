T_tempoQuePrecisaDormir, D_duracaoDoVoo, M_nRefeicoes = [int(i) for i in input().split()]
Y_tempoRefeicoesApartirDoVoo = 0

index = 0
tempoRefeicoes = []
tempoDormindo = 0
finalizou = False

while index < M_nRefeicoes:
    Y_tempoRefeicoesApartirDoVoo = int(input())
    tempoRefeicoes.append(Y_tempoRefeicoesApartirDoVoo)
    index += 1

if(len(tempoRefeicoes) > 0 ):
    i = 0
    for minuto in range(1, D_duracaoDoVoo + 1):
        if(minuto < tempoRefeicoes[i]):
            tempoDormindo += 1
            if(tempoDormindo == T_tempoQuePrecisaDormir):
                finalizou = True
                break
        elif tempoRefeicoes[i] == tempoRefeicoes[-1]:
            if(D_duracaoDoVoo - tempoRefeicoes[-1] >= T_tempoQuePrecisaDormir):
                finalizou = True
        else:
            tempoDormindo = 1
            i += 1
            if(i < len(tempoRefeicoes)):
                continue
            else:
                break
else:
    finalizou = True


if(finalizou == True):
    print('Y')
else:
    print('N')