#include <algorithm>
using namespace std;
class Solution {
    static bool sortFunc(pair<int, int> i, pair<int, int> j){ return i.first == j.first ? i.second > j.second : i.first < j.first; }
public:
    vector<pair<int, int>> reconstructQueue(vector<pair<int, int>>& people) {
        sort(people.begin(), people.end(), sortFunc);
        vector<pair<int, int>> temp(people.size(), make_pair(-1,-1));
        int emptyCounter;
        for(int i = 0; i < people.size(); i++ ){
            emptyCounter = 0;
            for(int insert = 0; insert < temp.size(); insert++){
                if(temp[insert].first == -1 && people[i].second == emptyCounter){
                    temp[insert] = people[i];
                    break;
                }else if(temp[insert].first == -1){
                    ++emptyCounter;
                }
            }
        }
        return temp;
    }
};